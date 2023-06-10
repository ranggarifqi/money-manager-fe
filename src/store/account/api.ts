import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { SuccessResponse, authorizedQuery } from "../rootAPI";

export const accountAPI = createApi({
  reducerPath: "accountApi",
  baseQuery: authorizedQuery,
  tagTypes: ["Account"],
  endpoints: (build) => ({
    findAccounts: build.mutation<string, void>({
      query: () => {
        return {
          url: `/v1/accounts`,
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
