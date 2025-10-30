import mongoose, { Schema, Document, Model } from 'mongoose';

export interface UserAttrs {
	fullName: string;
	email: string;
	password: string;
}

export interface UserDocument extends Document, UserAttrs {
	createdAt: Date;
	updatedAt: Date;
}

const userSchema = new Schema<UserDocument>(
	{
		fullName: {
			type: String,
			required: true,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
			trim: true,
			index: true,
		},
		password: {
			type: String,
			required: true,
			minlength: 6,
		},
	},
	{ timestamps: true }
);

userSchema.index({ email: 1 }, { unique: true });

export const User: Model<UserDocument> =
	mongoose.models.User || mongoose.model<UserDocument>('User', userSchema);


