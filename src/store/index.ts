import { configureStore } from "@reduxjs/toolkit";

import { sessionAPI } from "./session/api";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import persistedRootReducer from "./rootReducer";
import persistStore from "redux-persist/es/persistStore";

export const store = configureStore({
  reducer: persistedRootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(sessionAPI.middleware);
  },
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
