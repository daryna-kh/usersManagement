export type authRequestParamsType = {
  email: string;
  password: string;
};

export interface UserType {
  token: string;
  user: {
    email: string;
    id: number;
  };
}
