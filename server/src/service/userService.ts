import { PrismaClient, User } from '@prisma/client';
import { CreateUserInput, UpdateUserInput } from './types';

const prisma = new PrismaClient();

export const createUser = (data: CreateUserInput): Promise<User> => {
  return prisma.user.create({
    data: {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.hashedPassword,
    },
  });
};

export const getUserById = (id: number): Promise<User | null> => {
  return prisma.user.findUnique({
    where: { id: id },
  });
};

export const getUserByEmail = (email: string): Promise<User | null> => {
  return prisma.user.findUnique({
    where: { email },
  });
};

export const getAllUsers = (): Promise<
  Pick<User, 'id' | 'firstName' | 'lastName'>[]
> => {
  return prisma.user.findMany({
    select: {
      id: true,
      firstName: true,
      lastName: true,
      isActive: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

export const updateUser = (
  id: number,
  data: UpdateUserInput,
): Promise<User> => {
  return prisma.user.update({
    where: { id: id },
    data,
  });
};

export const deactivateUser = (id: number): Promise<User> => {
  return prisma.user.update({
    where: { id: id },
    data: { isActive: false },
  });
};
