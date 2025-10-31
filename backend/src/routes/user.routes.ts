import { Router } from 'express';
import { 
	createUser, 
	deleteUser, 
	getUserById,
	getUserByUserId,
	getUsers, 
	updateUser,
	signIn 
} from '../controllers/user.controller';

const router = Router();

// Authentication routes
router.post('/signup', createUser);
router.post('/signin', signIn);

// CRUD routes
router.get('/', getUsers);
router.get('/:id', getUserById);
router.get('/userId/:userId', getUserByUserId);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;