import { post } from "../axiosInstance";
import { authRequestParamsType, UserType } from "./types";

export const getTokenAndAuth = async (
  params: authRequestParamsType
): Promise<UserType> => {
  const { username, password } = params;
  const body = JSON.stringify({
    username: username,
    password: password,
    expiresInMins: 30,
  });

  const responce = await post("/auth/login", body);
  return responce.data;
};
