import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

export interface CreateUserInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface UpdateUserInput {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  id: number;
}

export const createUser = (data: CreateUserInput): Promise<User> => {
  return prisma.user.create({ data });
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
    },
  });
};

export const updateUser = (
  id: string,
  data: UpdateUserInput,
): Promise<User> => {
  return prisma.user.update({
    where: { id: Number(id) },
    data,
  });
};

export const deactivateUser = (id: string): Promise<User> => {
  return prisma.user.update({
    where: { id: Number(id) },
    data: { isActive: false },
  });
};
