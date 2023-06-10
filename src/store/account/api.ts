import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { SuccessResponse } from "../rootAPI";

export const accountAPI = createApi({
  reducerPath: "accountApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL + "/v1/accounts",
  }),
  tagTypes: ["Account"],
  endpoints: (build) => ({
    findAccounts: build.mutation<string, void>({
      query: () => {
        return {
          url: `/`,
          method: "GET",
        };
      },
      transformResponse: (response: SuccessResponse<string>) => {
        return response.data;
      },
      invalidatesTags: ["Account"],
    }),
  }),
});

export const { useFindAccountsMutation } = accountAPI;
