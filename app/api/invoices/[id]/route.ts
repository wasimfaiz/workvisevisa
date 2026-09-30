import { NextRequest } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Invoice from "@/lib/models/Invoice";
import { getAuthUser } from "@/lib/auth";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = getAuthUser(request);
    if (!user) {
      return Response.json(
        { success: false, message: "Unauthorized. Please log in as admin." },
        { status: 401 }
      );
    }

    const { id } = await params;
    await connectDB();

    const invoice = await Invoice.findById(id).lean();
    if (!invoice) {
      return Response.json({ success: false, message: "Invoice not found." }, { status: 404 });
    }

    const transformed = {
      ...invoice,
      id: (invoice._id as unknown as { toString(): string }).toString(),
      _id: undefined,
      __v: undefined,
    };

    return Response.json({ success: true, data: transformed });
  } catch (error) {
    console.error("Error fetching invoice:", error);
    return Response.json({ success: false, message: "Failed to fetch invoice." }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = getAuthUser(request);
    if (!user) {
      return Response.json(
        { success: false, message: "Unauthorized. Please log in as admin." },
        { status: 401 }
      );
    }

    const { id } = await params;
    const body = await request.json();

    await connectDB();

    const updated = await Invoice.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      return Response.json({ success: false, message: "Invoice not found." }, { status: 404 });
    }

    return Response.json({
      success: true,
      message: "Invoice updated successfully!",
      data: updated,
    });
  } catch (error) {
    console.error("Error updating invoice:", error);
    return Response.json({ success: false, message: "Failed to update invoice." }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = getAuthUser(request);
    if (!user) {
      return Response.json(
        { success: false, message: "Unauthorized. Please log in as admin." },
        { status: 401 }
      );
    }

    const { id } = await params;
    await connectDB();

    const deleted = await Invoice.findByIdAndDelete(id);
    if (!deleted) {
      return Response.json(
        { success: false, message: "Invoice not found." },
        { status: 404 }
      );
    }

    return Response.json({ success: true, message: "Invoice deleted successfully!" });
  } catch (error) {
    console.error("Error deleting invoice:", error);
    return Response.json(
      { success: false, message: "Failed to delete invoice." },
      { status: 500 }
    );
  }
}
