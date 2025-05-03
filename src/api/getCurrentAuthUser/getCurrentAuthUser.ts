import { get } from "../axiosInstance";

export const getCurrentAuthUser = async () => {
  const me = await get("/me");
  console.log(me);
  return {};
};
