export interface CreateUserInput {
  firstName: string;
  lastName: string;
  email: string;
  hashedPassword: string;
}

export interface UpdateUserInput {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  id: number;
}

export interface LoginRequestType {
  email: string;
  password: string;
}
export interface AuthResponseType {
  token: string;
  user: { id: number; email: string };
}
