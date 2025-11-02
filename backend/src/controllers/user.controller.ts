import { Request, Response } from 'express';
import { User } from '../models/user.model';
export async function createUser(req: Request, res: Response) {
	try {
		const { fullName, email, password } = req.body;
		console.log("📝 Signup attempt:", { fullName, email });
		
		if (!fullName || !email || !password) {
			return res.status(400).json({ 
				message: 'Full name, email, password are required' 
			});
		}

		if (password.length < 6) {
			return res.status(400).json({ 
				message: 'Password must be at least 6 characters' 
			});
		}

		const existing = await User.findOne({ email });
		if (existing) {
			console.log("❌ Email already exists:", email);
			return res.status(409).json({ message: 'Email already registered' });
		}
		console.log("Hi");









		
		const user = await User.create({ fullName, email, password });
		console.log("✅ User created successfully:", user.userId);
		
		// Return user with userId included
		const userResponse = {
			_id: user._id,
			userId: user.userId,
			fullName: user.fullName,
			email: user.email
		};
		
		return res.status(201).json({ 
			message: 'User created successfully', 
			user: userResponse 
		});
	} catch (error: any) {
		console.error('❌ Error creating user:', error);
		return res.status(500).json({ 
			message: 'Failed to create user',
			error: error.message 
		});
	}
}
export async function signIn(req: Request, res: Response) {
	try {
		const { email, password } = req.body;
		console.log("🔐 Login attempt:", email);
		
		if (!email || !password) {
			return res.status(400).json({ 
				message: 'Email and password are required' 
			});
		}

		const user = await User.findOne({ email });
		
		if (!user) {
			console.log("❌ User not found:", email);
			return res.status(401).json({ message: 'Invalid credentials' });
		}

		if (user.password !== password) {
			console.log("❌ Invalid password for:", email);
			return res.status(401).json({ message: 'Invalid credentials' });
		}

		console.log("✅ Login successful:", user.userId);

		// Return user with userId included
		const userResponse = {
			_id: user._id,
			userId: user.userId,
			fullName: user.fullName,
			email: user.email
		};

		return res.json({ 
			message: 'Sign in successful', 
			user: userResponse 
		});
	} catch (error: any) {
		console.error('❌ Error signing in:', error);
		return res.status(500).json({ 
			message: 'Failed to sign in',
			error: error.message 
		});
	}
}