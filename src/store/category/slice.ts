import {
  EntityState,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { ErrorResponse } from "../rootAPI";
import { stringifyErrorMessage } from "../commons/stringifyErrorMessage";
import {
  ICategoryNormalized,
  ICategoryWithRelations,
  categoryListSchema,
} from "../../commons/models/category";
import { categoryAPI } from "./api";
import { normalize } from "normalizr";

type CategoryState = EntityState<ICategoryNormalized> & {
  raw: ICategoryWithRelations[];
  error: string | null;
};

export const categoryAdapter = createEntityAdapter<ICategoryNormalized>();

const initialState: CategoryState = {
  ...categoryAdapter.getInitialState(),
  raw: [],
  error: null,
};

export const slice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      categoryAPI.endpoints.findCategories.matchPending,
      (state) => {
        state.error = null;
      }
    );
    builder.addMatcher(
      categoryAPI.endpoints.findCategories.matchFulfilled,
      (state, action) => {
        categoryAdapter.removeAll(state);

        const normalized = normalize(action.payload, categoryListSchema);

        categoryAdapter.upsertMany(state, normalized.entities.category ?? {});
        categoryAdapter.upsertMany(
          state,
          normalized.entities.categoryChildren ?? {}
        );
        state.raw = action.payload;
      }
    );
    builder.addMatcher(
      categoryAPI.endpoints.findCategories.matchRejected,
      (state, action) => {
        const errMessage = (action.payload as ErrorResponse).message;
        const strErrMessage = stringifyErrorMessage(errMessage);
        state.error = strErrMessage;
      }
    );
  },
});

export default slice.reducer;
