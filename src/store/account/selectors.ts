import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";
import { accountAdapter } from "./slice";

export const sltAccount = (state: RootState) => {
  return state.account;
};

export const {
  selectAll: sltAllAccounts,
  selectById: sltAccountById,
  selectEntities: sltAccountEntities,
  selectIds: sltAccountIds,
  selectTotal: sltAccountTotal,
} = accountAdapter.getSelectors<RootState>(sltAccount);

export const sltAccountError = createSelector([sltAccount], (account) => {
  return account.error;
});
