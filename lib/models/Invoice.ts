import mongoose, { Schema, Document, Model } from "mongoose";

export interface IInvoiceItem {
  id: string;
  date: string;
  description: string;
  packageAmt: number;
  paymentMode: string;
  totalAmt: number;
  paidAmt: number;
  balanceAmt: number;
}

export interface IInvoice extends Document {
  billTo: string;
  mobileNumber: string;
  date: string;
  invoiceNumber: string;
  invoiceFor: string;
  countryApplyingFor: string;
  positionApplyingFor?: string;
  courseApplyingFor?: string;

  companyName: string;
  brandUnit: string;
  gstNo: string;
  officeAddress: string;
  patnaOfficeAddress?: string;

  items: IInvoiceItem[];

  bankAccountName: string;
  bankName: string;
  accountNumber: string;
  ifscCode: string;
  upiId: string;

  totalPaidAmount: number;
  totalBalanceAmount: number;
  footerNote: string;
  phone?: string;
  website?: string;

  createdAt: Date;
  updatedAt: Date;
}

const InvoiceItemSchema = new Schema<IInvoiceItem>(
  {
    id: { type: String, required: true },
    date: { type: String, required: true },
    description: { type: String, required: true },
    packageAmt: { type: Number, required: true, default: 0 },
    paymentMode: { type: String, required: true, default: "ONLINE" },
    totalAmt: { type: Number, required: true, default: 0 },
    paidAmt: { type: Number, required: true, default: 0 },
    balanceAmt: { type: Number, required: true, default: 0 },
  },
  { _id: false }
);

const InvoiceSchema = new Schema<IInvoice>(
  {
    billTo: { type: String, required: true, trim: true },
    mobileNumber: { type: String, required: true, trim: true },
    date: { type: String, required: true },
    invoiceNumber: { type: String, required: true, unique: true, trim: true },
    invoiceFor: { type: String, default: "" },
    countryApplyingFor: { type: String, default: "" },
    positionApplyingFor: { type: String, default: "" },
    courseApplyingFor: { type: String, default: "" },

    companyName: { type: String, default: "Europass Immigration Pvt. Ltd." },
    brandUnit: { type: String, default: "A Unit of Europass Immigration Pvt. Ltd." },
    gstNo: { type: String, default: "09AAHCE6130D1ZW" },
    officeAddress: {
      type: String,
      default: "Urbtech Trade Centre, D-701 C, Sector 132, Noida, Uttar Pradesh 201304",
    },
    patnaOfficeAddress: {
      type: String,
      default:
        "Office No. 606, 6th Floor, Verma Centre, Boring Rd Crossing, Sri Krishna Puri, Patna, Bihar 800001",
    },

    items: { type: [InvoiceItemSchema], required: true },

    bankAccountName: { type: String, default: "Europass Immigration Pvt. Ltd." },
    bankName: { type: String, default: "Union Bank" },
    accountNumber: { type: String, default: "902301010000036" },
    ifscCode: { type: String, default: "UBIN0590231" },
    upiId: { type: String, default: "" },

    totalPaidAmount: { type: Number, default: 0 },
    totalBalanceAmount: { type: Number, default: 0 },
    footerNote: { type: String, default: "Thank you for your business!" },
    phone: { type: String, default: "+91 81301 61603" },
    website: { type: String, default: "www.workwisevisa.com" },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (_doc, ret: Record<string, unknown>) => {
        ret.id = (ret._id as { toString(): string }).toString();
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  }
);

const Invoice: Model<IInvoice> =
  (mongoose.models.Invoice as Model<IInvoice>) ||
  mongoose.model<IInvoice>("Invoice", InvoiceSchema);

export default Invoice;
