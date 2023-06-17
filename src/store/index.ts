import { configureStore } from "@reduxjs/toolkit";

import { sessionAPI } from "./session/api";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import persistedRootReducer from "./rootReducer";
import persistStore from "redux-persist/es/persistStore";
import unauthorizedMiddleware from "./middlewares/unauthorized.middleware";
import { accountAPI } from "./account/api";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import { transactionAPI } from "./transaction/api";

export const store = configureStore({
  reducer: persistedRootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      sessionAPI.middleware,
      accountAPI.middleware,
      transactionAPI.middleware,
      unauthorizedMiddleware
    );
  },
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
