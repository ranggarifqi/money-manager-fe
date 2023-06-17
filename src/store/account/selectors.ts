import { accountAdapter } from "./slice";

export const {
  selectAll: sltAllAccounts,
  selectById: sltAccountById,
  selectEntities: sltAccountEntities,
  selectIds: sltAccountIds,
  selectTotal: sltAccountTotal,
} = accountAdapter.getSelectors();
