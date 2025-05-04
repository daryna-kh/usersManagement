export type authRequestParamsType = {
  username: string;
  password: string;
};

export interface UserType {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: Gender;
  image: string;
  accessToken: string;
  refreshToken: string;
}
