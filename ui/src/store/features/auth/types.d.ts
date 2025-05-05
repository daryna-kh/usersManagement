export type AuthInitialStateType = {
  loading: boolean;
  userInfo: { [key in string]: string };
  userToken: string | null;
  error: string | null;
  success: boolean;
};
