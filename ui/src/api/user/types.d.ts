export type registerParamsType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type registerResponseType = {
  createdAt: string;
  email: string;
  firstName: string;
  id: number;
  isActive: boolean;
  lastName: string;
  updatedAt: string;
};
