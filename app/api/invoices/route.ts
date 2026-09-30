import { NextRequest } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Invoice from "@/lib/models/Invoice";
import { requirePermission } from "@/lib/auth";

export async function GET(request: NextRequest) {
  try {
    const auth = await requirePermission(request, "invoices", "view");
    if (!auth.allowed) {
      return Response.json(
        { success: false, message: auth.error },
        { status: auth.status }
      );
    }

    await connectDB();
    const invoices = await Invoice.find({}).sort({ createdAt: -1 }).lean();

    const transformed = invoices.map((inv) => ({
      ...inv,
      id: (inv._id as unknown as { toString(): string }).toString(),
      _id: undefined,
      __v: undefined,
    }));

    return Response.json({ success: true, data: transformed, count: transformed.length });
  } catch (error) {
    console.error("Error fetching invoices:", error);
    return Response.json(
      { success: false, message: "Failed to fetch invoices" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const auth = await requirePermission(request, "invoices", "create");
    if (!auth.allowed) {
      return Response.json(
        { success: false, message: auth.error },
        { status: auth.status }
      );
    }

    const body = await request.json();

    if (!body.billTo || !body.mobileNumber || !body.invoiceNumber) {
      return Response.json(
        { success: false, message: "Client Name, Mobile Number, and Invoice Number are required." },
        { status: 400 }
      );
    }

    await connectDB();

    // Check if invoice number already exists
    const existing = await Invoice.findOne({ invoiceNumber: body.invoiceNumber.trim() });
    if (existing) {
      // Update existing
      Object.assign(existing, body);
      await existing.save();
      return Response.json({
        success: true,
        message: "Invoice updated successfully!",
        data: existing,
      });
    }

    const invoice = await Invoice.create(body);

    return Response.json(
      { success: true, message: "Invoice created successfully!", data: invoice },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("Error saving invoice:", error);
    const msg = error instanceof Error ? error.message : "Failed to save invoice";
    return Response.json({ success: false, message: msg }, { status: 500 });
  }
}
