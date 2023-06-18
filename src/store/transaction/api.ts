import { createApi } from "@reduxjs/toolkit/dist/query/react";
import {
  RootErrorResponse,
  SuccessResponse,
  authorizedQuery,
} from "../rootAPI";
import queryString from "query-string";
import { ITransactionWithAssociation } from "../../commons/models/transaction";

interface FindByAccountQuery {
  accountId: string;
  limit?: number;
}

export const transactionAPI = createApi({
  reducerPath: "transactionApi",
  baseQuery: authorizedQuery,
  tagTypes: ["Transaction"],
  endpoints: (build) => ({
    findTransactionByAccount: build.query<
      ITransactionWithAssociation[],
      FindByAccountQuery
    >({
      providesTags: ["Transaction"],
      query: (q) => {
        const qString = queryString.stringify(q);
        return {
          url: `/v1/transactions/by-account?${qString}`,
          method: "GET",
        };
      },
      transformResponse: (
        response: SuccessResponse<ITransactionWithAssociation[]>
      ) => {
        return response.data;
      },
      transformErrorResponse(baseQueryReturnValue: RootErrorResponse) {
        return baseQueryReturnValue.data;
      },
    }),
  }),
});

export const { useFindTransactionByAccountQuery } = transactionAPI;
