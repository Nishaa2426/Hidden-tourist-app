import { Request, Response } from 'express';
import { User } from '../models/user.model';

export async function createUser(req: Request, res: Response) {
	try {
		const { fullName, email, password } = req.body;
		console.log("Name",fullName,"Email",email,"Password",password)
		// Validate required fields
		if (!fullName || !email || !password ) {
			return res.status(400).json({ 
				message: 'Full name, email, password are required' 
			});
		}
		


		// Validate password length
		if (password.length < 6) {
			return res.status(400).json({ 
				message: 'Password must be at least 6 characters' 
			});
		}

		// Check if email already exists
		const existing = await User.findOne({ email });
		if (existing) {
			return res.status(409).json({ message: 'Email already registered' });
		}

		const user = await User.create({ fullName, email, password });
		
		// Return user without password
		const userWithoutPassword = user.toObject();
		const { password: _, ...userResponse } = userWithoutPassword;
		
		return res.status(201).json({ 
			message: 'User created successfully', 
			user: userResponse 
		});
	} catch (error) {
		console.error('Error creating user:', error);
		return res.status(500).json({ message: 'Failed to create user' });
	}
}

export async function signIn(req: Request, res: Response) {
	try {
		const { email, password } = req.body;
		
		if (!email || !password) {
			return res.status(400).json({ 
				message: 'Email and password are required' 
			});
		}

		const user = await User.findOne({ email });
		
		if (!user) {
			return res.status(401).json({ message: 'Invalid credentials' });
		}

		// For now, simple password comparison (you should hash passwords)
		if (user.password !== password) {
			return res.status(401).json({ message: 'Invalid credentials' });
		}

		// Return user without password
		const userWithoutPassword = user.toObject();
		const { password: _, ...userResponse } = userWithoutPassword;

		return res.json({ 
			message: 'Sign in successful', 
			user: userResponse 
		});
	} catch (error) {
		console.error('Error signing in:', error);
		return res.status(500).json({ message: 'Failed to sign in' });
	}
}

export async function getUsers(_req: Request, res: Response) {
	try {
		const users = await User.find().select('-password');
		return res.json(users);
	} catch (error) {
		return res.status(500).json({ message: 'Failed to fetch users' });
	}
}

export async function getUserById(req: Request, res: Response) {
	try {
		const { id } = req.params;
		const user = await User.findById(id).select('-password');
		if (!user) {
			return res.status(404).json({ message: 'User not found' });
		}
		return res.json(user);
	} catch (error) {
		return res.status(500).json({ message: 'Failed to fetch user' });
	}
}

export async function updateUser(req: Request, res: Response) {
	try {
		const { id } = req.params;
		const { fullName, email, password } = req.body;
		const user = await User.findByIdAndUpdate(
			id,
			{ fullName, email, password },
			{ new: true, runValidators: true }
		).select('-password');
		if (!user) {
			return res.status(404).json({ message: 'User not found' });
		}
		return res.json(user);
	} catch (error) {
		return res.status(500).json({ message: 'Failed to update user' });
	}
}

export async function deleteUser(req: Request, res: Response) {
	try {
		const { id } = req.params;
		const user = await User.findByIdAndDelete(id).select('-password');
		if (!user) {
			return res.status(404).json({ message: 'User not found' });
		}
		return res.status(204).send();
	} catch (error) {
		return res.status(500).json({ message: 'Failed to delete user' });
	}
}


