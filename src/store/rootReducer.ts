import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

import sessionReducer from "./session/slice";
import { sessionAPI } from "./session/api";
import { persistReducer } from "redux-persist";
import { accountAPI } from "./account/api";

const persistConfig = {
  key: "root",
  storage,
  blacklist: [sessionAPI.reducerPath, accountAPI.reducerPath],
};

const rootReducer = combineReducers({
  session: sessionReducer,

  [sessionAPI.reducerPath]: sessionAPI.reducer,
  [accountAPI.reducerPath]: accountAPI.reducer,
});

const persistedRootReducer = persistReducer(persistConfig, rootReducer);
export default persistedRootReducer;
