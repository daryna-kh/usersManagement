import { Router } from 'express';
import {
  createUserController,
  deactivateUserController,
  getAllUsersController,
  getUserByIdController,
  updateUserController,
} from '../controllers/userController';

const userRoutes = Router();

userRoutes.post('/', createUserController);
userRoutes.get('/', getAllUsersController);
userRoutes.get('/:id', getUserByIdController);
userRoutes.put('/:id', updateUserController);
userRoutes.delete('/:id', deactivateUserController);

export default userRoutes;
