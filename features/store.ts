import { configureStore } from "@reduxjs/toolkit";
import { publicApiSlice } from "./api/publicApiSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [publicApiSlice.reducerPath]: publicApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(publicApiSlice.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
