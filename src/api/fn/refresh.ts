import { SuccessResponse, getAxiosInstance } from "../axios";

export const refresh = async () => {
  const api = getAxiosInstance();
  const { data } = await api.get<SuccessResponse<string>>("/auth/refresh");

  const { data: accessToken } = data;
  return accessToken;
};
