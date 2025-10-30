import mongoose, { Schema, Document } from "mongoose";

export interface IBooking extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  date: Date;
  travelers: number;
  specialRequests?: string;
  packageName?: string;
  totalAmount?: number;
}

const BookingSchema: Schema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    date: { type: Date, required: true },
    travelers: { type: Number, required: true },
    specialRequests: { type: String },
    packageName: { type: String, default: "Coastal Heritage Trail" },
    totalAmount: { type: Number, default: 14299 },
  },
  { timestamps: true }
);

export default mongoose.model<IBooking>("Booking", BookingSchema);
