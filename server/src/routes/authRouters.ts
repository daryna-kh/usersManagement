import { Router } from 'express';
import { loginController } from '../controllers/authController';
import { createUserController } from '../controllers/userController';

const authRoutes = Router();

authRoutes.post('/', loginController);
authRoutes.post('/register', createUserController);

export default authRoutes;
