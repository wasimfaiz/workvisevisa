import { NextRequest } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Inquiry from "@/lib/models/Inquiry";
import AdminUser from "@/lib/models/AdminUser";
import { requirePermission } from "@/lib/auth";

// Helper to resolve full assignee details from database or payload
async function resolveAssignee(assignedToInput: unknown) {
  if (!assignedToInput || assignedToInput === "unassigned") {
    return { id: null, name: "", email: "", role: "" };
  }

  let empId: string | null = null;
  let fallbackName = "";
  let fallbackEmail = "";
  let fallbackRole = "";

  if (typeof assignedToInput === "string") {
    empId = assignedToInput.trim();
  } else if (typeof assignedToInput === "object" && assignedToInput !== null) {
    const obj = assignedToInput as Record<string, unknown>;
    empId = typeof obj.id === "string" && obj.id ? obj.id.trim() : null;
    fallbackName = typeof obj.name === "string" ? obj.name.trim() : "";
    fallbackEmail = typeof obj.email === "string" ? obj.email.trim() : "";
    fallbackRole = typeof obj.role === "string" ? obj.role.trim() : "";
  }

  if (!empId || empId === "unassigned" || empId === "null") {
    if (fallbackName) {
      return {
        id: null,
        name: fallbackName,
        email: fallbackEmail,
        role: fallbackRole || "counselor",
      };
    }
    return { id: null, name: "", email: "", role: "" };
  }

  // Look up employee in AdminUser collection
  try {
    const user = await AdminUser.findById(empId).select("name email role").lean();
    if (user) {
      return {
        id: (user._id as unknown as { toString(): string }).toString(),
        name: user.name || fallbackName || "Staff",
        email: user.email || fallbackEmail || "",
        role: user.role || fallbackRole || "staff",
      };
    }
  } catch {
    // If not a valid ObjectId or not found by ID, attempt lookup by name/email
    try {
      const user = await AdminUser.findOne({
        $or: [{ name: empId }, { email: empId }],
      }).select("name email role").lean();
      if (user) {
        return {
          id: (user._id as unknown as { toString(): string }).toString(),
          name: user.name,
          email: user.email,
          role: user.role || "staff",
        };
      }
    } catch {
      // ignore
    }
  }

  return {
    id: empId,
    name: fallbackName || empId,
    email: fallbackEmail,
    role: fallbackRole || "staff",
  };
}

export const dynamic = "force-dynamic";
export const revalidate = 0;

// GET /api/inquiries (Admin only)
export async function GET(request: NextRequest) {
  try {
    const auth = await requirePermission(request, "inquiries", "view");
    if (!auth.allowed) {
      return Response.json(
        { success: false, message: auth.error },
        { status: auth.status }
      );
    }

    await connectDB();

    const { searchParams } = new URL(request.url);
    const assignedFilter = searchParams.get("assignedTo");

    const query: Record<string, unknown> = {};
    if (assignedFilter && assignedFilter !== "all") {
      if (assignedFilter === "unassigned") {
        query.$or = [
          { "assignedTo.id": null },
          { "assignedTo.id": "" },
          { "assignedTo.id": { $exists: false } },
        ];
      } else {
        query["assignedTo.id"] = assignedFilter;
      }
    }

    const inquiries = await Inquiry.find(query).sort({ createdAt: -1 }).lean();

    const transformed = inquiries.map((inq: any) => {
      let cleanAssigned = { id: null as string | null, name: "", email: "", role: "" };
      if (inq.assignedTo && typeof inq.assignedTo === "object") {
        cleanAssigned = {
          id: inq.assignedTo.id || null,
          name: inq.assignedTo.name || "",
          email: inq.assignedTo.email || "",
          role: inq.assignedTo.role || "",
        };
      }
      return {
        ...inq,
        id: (inq._id as unknown as { toString(): string }).toString(),
        assignedTo: cleanAssigned,
        _id: undefined,
        __v: undefined,
      };
    });

    const newCount = transformed.filter((i) => i.status === "new").length;

    return Response.json(
      {
        success: true,
        data: transformed,
        total: transformed.length,
        newCount,
      },
      {
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
        },
      }
    );
  } catch (error) {
    console.error("Error fetching inquiries:", error);
    return Response.json(
      { success: false, message: "Failed to fetch inquiries" },
      { status: 500 }
    );
  }
}

// POST /api/inquiries (Public Consultation Form & Admin Lead Creation)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, phone, country, occupation, source, status, notes, assignedTo } = body;

    const trimmedName = typeof name === "string" ? name.trim() : "";
    const trimmedPhone = typeof phone === "string" ? phone.trim() : "";
    const trimmedCountry = (typeof country === "string" && country.trim()) ? country.trim() : "General Destination";
    const trimmedOccupation = (typeof occupation === "string" && occupation.trim()) ? occupation.trim() : "General / Not Specified";

    if (!trimmedName || trimmedName.length < 2) {
      return Response.json(
        { success: false, message: "Full Name is required (minimum 2 characters)." },
        { status: 400 }
      );
    }

    const cleanPhoneDigits = trimmedPhone.replace(/\D/g, "");
    if (!trimmedPhone || cleanPhoneDigits.length < 7) {
      return Response.json(
        { success: false, message: "Please provide a valid phone or WhatsApp number (at least 7 digits)." },
        { status: 400 }
      );
    }

    await connectDB();

    const validStatuses = [
      "new",
      "interested",
      "contacted",
      "in_progress",
      "payment_mode",
      "converted",
      "dnp",
      "not_interested",
      "closed",
    ] as const;
    type InquiryStatus = (typeof validStatuses)[number];
    const inquiryStatus: InquiryStatus =
      typeof status === "string" && (validStatuses as readonly string[]).includes(status)
        ? (status as InquiryStatus)
        : "new";

    // Clean and resolve assignedTo payload if provided
    const cleanAssignedTo = await resolveAssignee(assignedTo);

    const newInquiry = await Inquiry.create({
      name: trimmedName,
      phone: trimmedPhone,
      country: trimmedCountry,
      occupation: trimmedOccupation,
      status: inquiryStatus,
      notes: typeof notes === "string" ? notes.trim() : "",
      source: (typeof source === "string" && source.trim()) ? source.trim() : "Consultation Form - Homepage",
      assignedTo: cleanAssignedTo,
    });

    return Response.json(
      {
        success: true,
        message: "Inquiry / Lead created successfully!",
        data: {
          id: newInquiry.id,
          name: newInquiry.name,
          phone: newInquiry.phone,
          country: newInquiry.country,
          occupation: newInquiry.occupation,
          status: newInquiry.status,
          notes: newInquiry.notes,
          source: newInquiry.source,
          assignedTo: newInquiry.assignedTo,
          createdAt: newInquiry.createdAt,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating inquiry:", error);
    return Response.json(
      { success: false, message: "Failed to submit consultation request. Please try again." },
      { status: 500 }
    );
  }
}
