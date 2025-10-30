import mongoose from 'mongoose';
import { env } from './env';

export async function connectToDatabase(): Promise<void> {
	if (!env.mongoUri) {
		throw new Error('MONGO_URI is not configured');
	}
	await mongoose.connect(env.mongoUri, {
		// dbName is optional; only set if provided
		dbName: env.mongoDbName,
	});
}


