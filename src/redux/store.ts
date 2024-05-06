import { configureStore } from "@reduxjs/toolkit";
import { topProductsApi } from "./features/topProducts/topProductsApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [topProductsApi.reducerPath]: topProductsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(topProductsApi.middleware),
});

setupListeners(store.dispatch);
