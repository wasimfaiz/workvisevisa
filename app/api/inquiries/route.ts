import { NextRequest } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Inquiry from "@/lib/models/Inquiry";
import { requirePermission } from "@/lib/auth";

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
    const inquiries = await Inquiry.find({}).sort({ createdAt: -1 }).lean();

    const transformed = inquiries.map((inq) => ({
      ...inq,
      id: (inq._id as unknown as { toString(): string }).toString(),
      _id: undefined,
      __v: undefined,
    }));

    const newCount = transformed.filter((i) => i.status === "new").length;

    return Response.json({
      success: true,
      data: transformed,
      total: transformed.length,
      newCount,
    });
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

    const { name, phone, country, occupation, source, status, notes } = body;

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

    const validStatuses = ["new", "contacted", "in_progress", "converted", "closed"] as const;
    type InquiryStatus = (typeof validStatuses)[number];
    const inquiryStatus: InquiryStatus =
      typeof status === "string" && (validStatuses as readonly string[]).includes(status)
        ? (status as InquiryStatus)
        : "new";

    const newInquiry = await Inquiry.create({
      name: trimmedName,
      phone: trimmedPhone,
      country: trimmedCountry,
      occupation: trimmedOccupation,
      status: inquiryStatus,
      notes: typeof notes === "string" ? notes.trim() : "",
      source: (typeof source === "string" && source.trim()) ? source.trim() : "Consultation Form - Homepage",
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
