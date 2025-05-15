import axios, { AxiosResponse, AxiosError, isAxiosError } from "axios";
import { registerParamsType, registerResponseType } from "./types";

type RegisterSuccess = {
  success: true;
  data: AxiosResponse<registerResponseType>;
};

type RegisterFailure = {
  success: false;
  error: string;
  status?: number;
};

export type RegisterResult = RegisterSuccess | RegisterFailure;

export const fetchRegister = async (
  params: registerParamsType
): Promise<RegisterResult> => {
  const { firstName, lastName, email, password } = params;

  try {
    const response = await axios.post(
      "/api/auth/register",
      { firstName, lastName, email, password },
      { headers: { "Content-Type": "application/json" } }
    );
    return { success: true, data: response };
  } catch (err) {
    if (isAxiosError(err)) {
      const axiosError = err as AxiosError<{ message?: string }>;
      const status = axiosError.response?.status;
      const message =
        axiosError.response?.data?.message ??
        JSON.stringify(axiosError.response?.data) ??
        axiosError.message;
      return {
        success: false,
        status,
        error: message,
      };
    }
    return {
      success: false,
      error: (err as Error).message,
    };
  }
};
