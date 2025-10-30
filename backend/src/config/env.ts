import dotenv from 'dotenv';

// Load environment variables once
dotenv.config();

function requireEnv(name: string): string {
	const value = process.env[name];
	if (!value) {
		console.error(`Missing required environment variable: ${name}`);
		process.exit(1);
	}
	return value;
}

export const env = {
	port: Number(process.env.PORT) || 5000,
	mongoUri: requireEnv('MONGO_URI'),
	mongoDbName: process.env.MONGO_DB_NAME,
	nodeEnv: process.env.NODE_ENV ?? 'development',
};