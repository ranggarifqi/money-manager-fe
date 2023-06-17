import { BaseQueryFn, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { RootState } from ".";
import { logoutSuccess, refreshSuccess } from "./session/slice";

export interface SuccessResponse<T> {
  statusCode: number;
  message?: string;
  data: T;
}

export interface ErrorResponse {
  statusCode: number;
  message: string | object | string[];
  error?: string;
}

export interface RootErrorResponse {
  data: ErrorResponse;
  status: number;
}

const baseAuthorizedQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).session.authToken;

    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

export const authorizedQuery: BaseQueryFn = async (args, api, extraOptions) => {
  const tokenExpired =
    (api.getState() as RootState).session.credential?.exp ?? 0;

  const tokenExpiredInMs = tokenExpired * 1000;
  const now = new Date().getTime();

  if (now > tokenExpiredInMs) {
    try {
      const { data } = await baseAuthorizedQuery(
        {
          url: "/auth/refresh",
          credentials: "include",
        },
        api,
        extraOptions
      );

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const newAccessToken = (data as any).data;
      api.dispatch(refreshSuccess(newAccessToken));
    } catch (error) {
      api.dispatch(logoutSuccess());
    }
  }

  const result = await baseAuthorizedQuery(args, api, extraOptions);

  return result;
};
