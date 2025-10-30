import { Router } from 'express';
import { 
	createUser, 
	deleteUser, 
	getUserById, 
	getUsers, 
	updateUser,
	signIn 
} from '../controllers/user.controller';

const router = Router();

// Authentication routes
router.post('/signup', createUser);  // Match the form fields: fullName, email, password, confirmPassword
router.post('/signin', signIn);      // Match the form fields: email, password

// CRUD routes
router.get('/', getUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;


