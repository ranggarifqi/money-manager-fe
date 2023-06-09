import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SuccessResponse } from "../rootAPI";

interface ILoginPayload {
  email: string;
  password: string;
}

export const sessionAPI = createApi({
  reducerPath: "sessionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL + "/auth",
  }),
  tagTypes: ["Session"],
  endpoints: (build) => ({
    login: build.mutation<string, ILoginPayload>({
      query: (payload) => {
        return {
          url: `/login`,
          method: "POST",
          body: payload,
          credentials: "include",
        };
      },
      transformResponse: (response: SuccessResponse<string>) => {
        return response.data;
      },
      invalidatesTags: ["Session"],
    }),
  }),
});

export const { useLoginMutation } = sessionAPI;
