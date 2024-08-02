import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./features/login/loginSlice";
import { loginApi } from "./features/login/login.api";
export const store = configureStore({
  reducer: {
    [loginApi.reducerPath]: loginApi.reducer,
    login: loginReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loginApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
