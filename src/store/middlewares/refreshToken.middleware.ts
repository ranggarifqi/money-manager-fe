import { Middleware } from "@reduxjs/toolkit";
import { refreshSession } from "../session/thunk";
import { AppDispatch } from "..";

const refreshTokenMiddleware: Middleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    const isRejected = action.type.indexOf("executeMutation/rejected") !== -1;
    const isUnauthorized = isRejected && action.payload.status === 401;
    if (isUnauthorized) {
      const appDispatch = dispatch as AppDispatch;
      appDispatch(refreshSession());
    }

    next(action);
  };

export default refreshTokenMiddleware;
