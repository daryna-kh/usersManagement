import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import config from '../config/config';
import bcrypt from 'bcrypt';

export interface LoginRequestType {
  email: string;
  password: string;
}
export interface AuthResponseType {
  token: string;
  user: { id: number; email: string };
}
const prisma = new PrismaClient();

export const login = async ({
  email,
  password,
}: LoginRequestType): Promise<AuthResponseType> => {
  console.log(email, password);
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) throw new Error('Invalid credentials');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid credentials');

  const token = jwt.sign({ id: user.id, email: user.email }, config.jwtSecret, {
    expiresIn: '1h',
  });

  return { token, user: { id: user.id, email: user.email } };
};
