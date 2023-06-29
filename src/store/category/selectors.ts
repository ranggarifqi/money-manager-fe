import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";
import { categoryAdapter } from "./slice";

export const sltCategory = (state: RootState) => {
  return state.category;
};

export const {
  selectAll: sltAllCategories,
  selectById: sltCategoryById,
  selectEntities: sltCategoryEntities,
  selectIds: sltCategoryIds,
  selectTotal: sltCategoryTotal,
} = categoryAdapter.getSelectors<RootState>(sltCategory);

export const sltCategoryError = createSelector([sltCategory], (category) => {
  return category.error;
});

export const sltCategoryRaw = createSelector(
  [sltCategory],
  (category) => category.raw
);
