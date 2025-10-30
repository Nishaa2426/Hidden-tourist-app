import mongoose, { Schema, Document } from "mongoose";

export interface IPayment extends Document {
  bookingId?: mongoose.Types.ObjectId;
  paymentMethod: "card" | "upi" | "netbanking";
  amount: number;
  status: "Pending" | "Success" | "Failed";
  transactionId?: string;
  createdAt: Date;
}

const PaymentSchema = new Schema<IPayment>(
  {
    bookingId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
    },
    paymentMethod: {
      type: String,
      enum: ["card", "upi", "netbanking"],
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Success", "Failed"],
      default: "Pending",
    },
    transactionId: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<IPayment>("Payment", PaymentSchema);
