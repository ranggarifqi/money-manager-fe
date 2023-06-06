import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

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
}

const initialState: SessionState = {
  authToken: null,
  credential: null,
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
});

export const { loginSuccess, logoutSuccess } = sessionSlice.actions;
export default sessionSlice.reducer;
