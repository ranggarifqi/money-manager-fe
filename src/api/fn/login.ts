import { SuccessResponse, getAxiosInstance } from "../axios";

interface ILoginPayload {
  email: string;
  password: string;
}

export const login = async ({ email, password }: ILoginPayload) => {
  const api = getAxiosInstance();
  const { data } = await api.post<SuccessResponse<string>>("/auth/login", {
    email,
    password,
  });

  const { data: accessToken } = data;
  return accessToken;
};
