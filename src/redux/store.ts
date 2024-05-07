import { configureStore } from "@reduxjs/toolkit";
import { topProductsApi } from "./features/topProducts/topProductsApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import reducers from "./reducers";

export const store = configureStore({
  reducer: {
    [topProductsApi.reducerPath]: topProductsApi.reducer,
    ...reducers
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(topProductsApi.middleware),
});

setupListeners(store.dispatch);
