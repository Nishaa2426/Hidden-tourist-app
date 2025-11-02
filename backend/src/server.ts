import express from 'express';
import cors from 'cors';
import { env } from './config/env';
import { connectToDatabase } from './config/db';
import userRouter from './routes/user.routes'
import bookingRoutes from "./routes/booking.routes";
import paymentRoutes from "./routes/payment.routes";

async function bootstrap() {
	const app = express();

	app.use(cors());
	app.use(express.json());

	app.get('/health', (_req, res) => {
		return res.json({ status: 'ok' });
	});

	app.use('/api/users', userRouter);
	app.use("/api/bookings", bookingRoutes);
	app.use("/api/payment", paymentRoutes);
	
	// Connect to MongoDB with better error handling
	try {
		await connectToDatabase();
		console.log('✅ MongoDB connected successfully');
	} catch (error) {
		console.error('❌ MongoDB connection failed:', error);
		process.exit(1);
	}
	
	app.listen(env.port, () => {
		console.log(`✅ Server running on http://localhost:${env.port}`);
	});
}

bootstrap().catch((error) => {
	console.error('❌ Failed to start server', error);
	process.exit(1);
});