import mongoose, { Schema, Document, Model } from 'mongoose';

export interface UserAttrs {
	fullName: string;
	email: string;
	password: string;
}

export interface UserDocument extends Document, UserAttrs {
	userId: string; // Unique ID for each user
	createdAt: Date;
	updatedAt: Date;
}

const userSchema = new Schema<UserDocument>(
	{
		userId: {
			type: String,
			unique: true,
			required: true,
			index: true,
		},
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

// Generate unique userId before saving
userSchema.pre('save', function (next) {
	if (!this.userId) {
		this.userId = `USER-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
	}
	next();
});

userSchema.index({ email: 1 }, { unique: true });
userSchema.index({ userId: 1 }, { unique: true });

export const User: Model<UserDocument> =
	mongoose.models.User || mongoose.model<UserDocument>('User', userSchema);