import { Middleware } from "@reduxjs/toolkit";
import { AppDispatch } from "..";
import { logoutSuccess } from "../session/slice";

const unauthorizedMiddleware: Middleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    const isRejected = action.type.indexOf("executeMutation/rejected") !== -1;
    const isUnauthorized = isRejected && action.payload.status === 401;
    
    /** This only happens when the accessToken is invalid */
    if (isUnauthorized) {
      const appDispatch = dispatch as AppDispatch;
      appDispatch(logoutSuccess());
    }

    next(action);
  };

export default unauthorizedMiddleware;
