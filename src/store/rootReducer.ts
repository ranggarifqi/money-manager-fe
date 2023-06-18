import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

import sessionReducer from "./session/slice";
import accountReducer from "./account/slice";
import modalReducer from "./modal/slice";
import { sessionAPI } from "./session/api";
import { persistReducer } from "redux-persist";
import { accountAPI } from "./account/api";
import { transactionAPI } from "./transaction/api";

const persistConfig = {
  key: "root",
  storage,
  blacklist: [
    "modal",
    sessionAPI.reducerPath,
    accountAPI.reducerPath,
    transactionAPI.reducerPath,
  ],
};

const rootReducer = combineReducers({
  session: sessionReducer,
  account: accountReducer,
  modal: modalReducer,

  [sessionAPI.reducerPath]: sessionAPI.reducer,
  [accountAPI.reducerPath]: accountAPI.reducer,
  [transactionAPI.reducerPath]: transactionAPI.reducer,
});

const persistedRootReducer = persistReducer(persistConfig, rootReducer);
export default persistedRootReducer;
