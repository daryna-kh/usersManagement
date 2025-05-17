import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import {
  createUser,
  deactivateUser,
  getAllUsers,
  getUserByEmail,
  getUserById,
  updateUser,
} from '../service/userService';
import { login } from '../service/authServices';
import { parseAndValidateId } from '../utils/parseAndValidateId';

async function hashPassword(password: string) {
  try {
    const hash = await bcrypt.hash(password, 10);
    return hash;
  } catch (err) {
    console.error('Hash error:', err);
    return null;
  }
}

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

    const hashedPassword = await hashPassword(password);

    if (!hashedPassword) return;

    const user = await createUser({
      firstName,
      lastName,
      email,
      hashedPassword,
    });

    const { token, user: loggedInUser } = await login({ email, password });

    res.status(201).json({
      token,
      user: loggedInUser,
    });
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
  const userId = parseAndValidateId(req.params.id, res);
  if (userId === null) return;

  try {
    const user = await getUserById(userId);
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
  const userId = parseAndValidateId(req.params.id, res);
  if (userId === null) return;

  try {
    const updated = await updateUser(userId, req.body);
    const { password, ...safeUser } = updated;
    res.json(safeUser);
  } catch (error: any) {
    res.status(400).json({ error: 'Update failed' });
  }
};

export const deactivateUserController = async (req: Request, res: Response) => {
  const userId = parseAndValidateId(req.params.id, res);
  if (userId === null) return;

  try {
    const deleted = await deactivateUser(userId);
    const { password, ...safeUser } = deleted;
    res.json({ message: 'User deactivated', user: safeUser });
  } catch (error: any) {
    res.status(400).json({ error: 'Delete failed' });
  }
};
