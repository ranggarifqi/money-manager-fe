import { createApi } from "@reduxjs/toolkit/dist/query/react";
import {
  RootErrorResponse,
  SuccessResponse,
  authorizedQuery,
} from "../rootAPI";
import { normalize } from "normalizr";
import { IAccount, accountListSchema } from "../../commons/models/account";
import { CompleteNormalizedEntities } from "../../commons/models";

export const accountAPI = createApi({
  reducerPath: "accountApi",
  baseQuery: authorizedQuery,
  tagTypes: ["Account"],
  endpoints: (build) => ({
    findAccounts: build.query<CompleteNormalizedEntities, void>({
      query: () => {
        return {
          url: `/v1/accounts`,
          method: "GET",
        };
      },
      transformResponse: (response: SuccessResponse<IAccount>) => {
        const normalized = normalize(response.data, accountListSchema);
        return normalized.entities;
      },
      transformErrorResponse(baseQueryReturnValue: RootErrorResponse) {
        return baseQueryReturnValue.data;
      },
    }),
  }),
});

export const { useFindAccountsQuery } = accountAPI;
