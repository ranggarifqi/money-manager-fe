import {
  EntityState,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { ErrorResponse } from "../rootAPI";
import { stringifyErrorMessage } from "../commons/stringifyErrorMessage";
import { ICategory } from "../../commons/models/category";
import { categoryAPI } from "./api";

type CategoryState = EntityState<ICategory> & {
  error: string | null;
};

export const categoryAdapter = createEntityAdapter<ICategory>();

const initialState: CategoryState = {
  ...categoryAdapter.getInitialState(),
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
        categoryAdapter.upsertMany(state, action.payload.category ?? {});
        categoryAdapter.upsertMany(
          state,
          action.payload.categoryChildren ?? {}
        );
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
