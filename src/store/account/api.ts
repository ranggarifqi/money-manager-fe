import { createApi } from "@reduxjs/toolkit/dist/query/react";
import {
  RootErrorResponse,
  SuccessResponse,
  authorizedQuery,
} from "../rootAPI";
import { normalize } from "normalizr";
import { IAccount, accountListSchema } from "../../commons/models/account";
import { CompleteNormalizedEntities } from "../../commons/models";
import { EAccountType } from "../../commons/models/accountType";
import { stringifyErrorMessage } from "../commons/stringifyErrorMessage";

interface CreateAccountDTO {
  accountTypeName: EAccountType;
  name: string;
  balance: number;
}

export const accountAPI = createApi({
  reducerPath: "accountApi",
  baseQuery: authorizedQuery,
  tagTypes: ["Account"],
  endpoints: (build) => ({
    findAccounts: build.query<CompleteNormalizedEntities, void>({
      providesTags: ["Account"],
      query: () => {
        return {
          url: `/v1/accounts`,
          method: "GET",
          credentials: "include",
        };
      },
      transformResponse: (response: SuccessResponse<IAccount[]>) => {
        const normalized = normalize(response.data, accountListSchema);
        return normalized.entities;
      },
      transformErrorResponse(baseQueryReturnValue: RootErrorResponse) {
        return baseQueryReturnValue.data;
      },
    }),

    createAccount: build.mutation<IAccount, CreateAccountDTO>({
      query: (payload) => {
        return {
          url: `/v1/accounts`,
          method: "POST",
          body: payload,
          credentials: "include",
        };
      },

      transformResponse(response: SuccessResponse<IAccount>) {
        return response.data;
      },
      transformErrorResponse(baseQueryReturnValue: RootErrorResponse): string {
        return stringifyErrorMessage(baseQueryReturnValue.data.message);
      },

      invalidatesTags: ["Account"],
    }),
  }),
});

export const { useFindAccountsQuery, useCreateAccountMutation } = accountAPI;
