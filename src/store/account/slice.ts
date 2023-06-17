import {
  EntityState,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { IAccount } from "../../commons/models/account";
import { accountAPI } from "./api";
import { ErrorResponse } from "../rootAPI";
import { stringifyErrorMessage } from "../commons/stringifyErrorMessage";

type AccountState = EntityState<IAccount> & {
  error: string | null;
};

export const accountAdapter = createEntityAdapter<IAccount>();

const initialState: AccountState = {
  ...accountAdapter.getInitialState(),
  error: null,
};

export const slice = createSlice({
  name: "account",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      accountAPI.endpoints.findAccounts.matchPending,
      (state) => {
        state.error = null;
      }
    );
    builder.addMatcher(
      accountAPI.endpoints.findAccounts.matchFulfilled,
      (state, action) => {
        accountAdapter.upsertMany(state, action.payload.accounts ?? {});
      }
    );
    builder.addMatcher(
      accountAPI.endpoints.findAccounts.matchRejected,
      (state, action) => {
        const errMessage = (action.payload as ErrorResponse).message;
        const strErrMessage = stringifyErrorMessage(errMessage);
        state.error = strErrMessage;
      }
    );
  },
});

export default slice.reducer;
