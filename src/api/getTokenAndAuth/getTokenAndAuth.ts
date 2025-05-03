import { post } from "../axiosInstance";
import { UserType } from "./types";

export const getTokenAndAuth = async (): Promise<UserType> => {
  const body = JSON.stringify({
    username: "emilys",
    password: "emilyspass",
    expiresInMins: 30,
  });

  const responce = await post("/auth/login", body);
  return responce.data;
};
