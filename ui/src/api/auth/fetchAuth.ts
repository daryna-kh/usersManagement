import { post } from "../axiosInstance";
import { authRequestParamsType, UserType } from "./types";

export const fetchAuth = async (
  params: authRequestParamsType
): Promise<UserType> => {
  const { email, password } = params;
  const body = JSON.stringify({
    email: email,
    password: password,
  });

  const responce = await post("/auth", body);
  return responce.data;
};
