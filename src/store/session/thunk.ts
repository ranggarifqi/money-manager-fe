import { createAsyncThunk } from "@reduxjs/toolkit";
import { refresh } from "../../api/fn/refresh";

export const refreshSession = createAsyncThunk(
  "session/refreshSession",
  async () => {
    const newAccessToken = await refresh();
    return newAccessToken;
  }
);
