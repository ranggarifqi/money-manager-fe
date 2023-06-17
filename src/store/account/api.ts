import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { SuccessResponse, authorizedQuery } from "../rootAPI";
import { IAccount } from "../../commons/models/accountType";

export const accountAPI = createApi({
  reducerPath: "accountApi",
  baseQuery: authorizedQuery,
  tagTypes: ["Account"],
  endpoints: (build) => ({
    findAccounts: build.query<IAccount, void>({
      query: () => {
        return {
          url: `/v1/accounts`,
          method: "GET",
        };
      },
      transformResponse: (response: SuccessResponse<IAccount>) => {
        return response.data;
      },
    }),
  }),
});

export const { useFindAccountsQuery } = accountAPI;
