import { Request, Response } from 'express';
import { login } from '../service/authServices';

interface LoginType {
  email: string;
  password: string;
}

export const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body as LoginType;

    const login_ = await login({ email, password });

    res.json(login_);
  } catch (error: any) {
    const statusCode = error.message === 'Invalid credentials' ? 401 : 500;
    res.status(statusCode).json({ error: error.message });
  }
};
