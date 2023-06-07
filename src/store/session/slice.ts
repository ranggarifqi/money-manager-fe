import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import { sessionAPI } from "./api";
import { ErrorResponse } from "../rootAPI";
import { stringifyErrorMessage } from "../commons/stringifyErrorMessage";

interface IUserCredential {
  userId: string;
  email: string;
  isVerified: boolean;
  iat: number;
  exp: number;
}

export interface SessionState {
  authToken: string | null;
  credential: IUserCredential | null;
  error: string | null;
}

const initialState: SessionState = {
  authToken: null,
  credential: null,
  error: null,
};

interface LoginSuccessPayload {
  authToken: string;
}

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<LoginSuccessPayload>) => {
      state.authToken = action.payload.authToken;

      const decoded = jwtDecode<IUserCredential>(action.payload.authToken);
      state.credential = decoded;
    },
    logoutSuccess: (state) => {
      state.authToken = null;
      state.credential = null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(sessionAPI.endpoints.login.matchPending, (state) => {
      state.error = null;
    });
    builder.addMatcher(
      sessionAPI.endpoints.login.matchFulfilled,
      (state, action) => {
        state.authToken = action.payload;

        const decoded = jwtDecode<IUserCredential>(action.payload);
        state.credential = decoded;
        state.error = null;
      }
    );
    builder.addMatcher(
      sessionAPI.endpoints.login.matchRejected,
      (state, action) => {
        const errMessage = (action.payload?.data as ErrorResponse).message;
        const strErrMessage = stringifyErrorMessage(errMessage);
        state.error = strErrMessage;
      }
    );
  },
});

export const { loginSuccess, logoutSuccess } = sessionSlice.actions;
export default sessionSlice.reducer;
