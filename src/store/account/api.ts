import { createApi } from "@reduxjs/toolkit/dist/query/react";
import {
  RootErrorResponse,
  SuccessResponse,
  authorizedQuery,
} from "../rootAPI";
import { normalize } from "normalizr";
import { IAccount, accountListSchema } from "../../commons/models/account";
import { CompleteNormalizedEntities } from "../../commons/models";
import { stringifyErrorMessage } from "../commons/stringifyErrorMessage";
import { transactionAPI } from "../transaction/api";

interface CreateAccountDTO {
  accountTypeName: string;
  name: string;
  balance: number;
}

interface UpdateAccountDTO {
  accountId: string;
  payload: CreateAccountDTO;
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

    updateAccountById: build.mutation<IAccount, UpdateAccountDTO>({
      invalidatesTags: ["Account"],

      query(payload) {
        return {
          url: `/v1/accounts/${payload.accountId}`,
          method: "PATCH",
          body: payload.payload,
          credentials: "include",
        };
      },
      transformResponse(response: SuccessResponse<IAccount>) {
        return response.data;
      },
      transformErrorResponse(baseQueryReturnValue: RootErrorResponse): string {
        return stringifyErrorMessage(baseQueryReturnValue.data.message);
      },
      async onQueryStarted(_arg, api) {
        try {
          await api.queryFulfilled;
          api.dispatch(transactionAPI.util.invalidateTags(["Transaction"]));
        } catch (error) {
          /* empty */
        }
      },
    }),
  }),
});

export const {
  useFindAccountsQuery,
  useCreateAccountMutation,
  useUpdateAccountByIdMutation,
} = accountAPI;
