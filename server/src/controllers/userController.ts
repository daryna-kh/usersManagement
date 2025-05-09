import { Request, Response } from 'express';
import {
  createUser,
  getAllUsers,
  getUserById,
  getUserByEmail,
  updateUser,
  deactivateUser,
} from '../models/userModel';

export const createUserController = async (req: Request, res: Response) => {
  const { firstName, lastName, email, password } = req.body;

  const missingFields = [];
  if (!firstName) missingFields.push('first name');
  if (!lastName) missingFields.push('last name');
  if (!email) missingFields.push('email');
  if (!password) missingFields.push('password');

  try {
    if (missingFields.length > 0) {
      res.status(400).json({
        error: `Missing required field(s): ${missingFields.join(', ')}`,
      });
      return;
    }

    const existing = await getUserByEmail(email);
    if (existing) {
      res.status(400).json({ error: 'Email already in use' });
      return;
    }

    const user = await createUser({ firstName, lastName, email, password });
    const { password: _, ...safeUser } = user;
    res.status(201).json(safeUser);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllUsersController = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getUserByIdController = async (req: Request, res: Response) => {
  const userIdNumber = Number(req.params.id);

  if (Number.isNaN(userIdNumber)) {
    res.status(400).json({
      error: 'ID must contain only numbers',
    });
    return;
  }

  try {
    const user = await getUserById(userIdNumber);
    if (!user || !user.isActive) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    const { password, ...safeUser } = user;
    res.json(safeUser);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const updateUserController = async (req: Request, res: Response) => {
  try {
    const updated = await updateUser(req.params.id, req.body);
    const { password, ...safeUser } = updated;
    res.json(safeUser);
  } catch (error: any) {
    res.status(400).json({ error: 'Update failed' });
  }
};

export const deactivateUserController = async (req: Request, res: Response) => {
  try {
    const deleted = await deactivateUser(req.params.id);
    const { password, ...safeUser } = deleted;
    res.json({ message: 'User deactivated', user: safeUser });
  } catch (error: any) {
    res.status(400).json({ error: 'Delete failed' });
  }
};
