import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

import sessionReducer from "./session/slice";
import { sessionAPI } from "./session/api";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  blacklist: [sessionAPI.reducerPath],
};

const rootReducer = combineReducers({
  session: sessionReducer,

  [sessionAPI.reducerPath]: sessionAPI.reducer,
});

const persistedRootReducer = persistReducer(persistConfig, rootReducer);
export default persistedRootReducer;
