import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { SuccessResponse, authorizedQuery } from "../rootAPI";
import queryString from "query-string";

interface FindByAccountQuery {
  accountId: string;
  limit?: number;
}

export const transactionAPI = createApi({
  reducerPath: "transactionApi",
  baseQuery: authorizedQuery,
  tagTypes: ["Transaction"],
  endpoints: (build) => ({
    findTransactionByAccount: build.mutation<string, FindByAccountQuery>({
      query: (q) => {
        const qString = queryString.stringify(q);
        return {
          url: `/v1/transactions/by-account?${qString}`,
          method: "GET",
        };
      },
      transformResponse: (response: SuccessResponse<string>) => {
        return response.data;
      },
      invalidatesTags: ["Transaction"],
    }),
  }),
});

export const { useFindTransactionByAccountMutation } = transactionAPI;
