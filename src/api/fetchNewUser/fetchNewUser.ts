import { post } from "../axiosInstance";
import { registerParamsType } from "./types";

export const fetchNewUser = async (
  params: registerParamsType
): Promise<{ [key in string]: string | number }> => {
  const { firstName, lastName, email, password } = params;
  const body = JSON.stringify({
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  });

  const responce = await post("/users/add", body);
  return responce.data;
};
