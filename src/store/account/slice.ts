import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { IAccount } from "../../commons/models/account";

const accountAdapter = createEntityAdapter<IAccount>();

const initialState = accountAdapter.getInitialState();

export const slice = createSlice({
  name: "account",
  initialState,
  reducers: {},
});

export default slice.reducer;
