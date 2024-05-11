import { configureStore } from "@reduxjs/toolkit";
import { topProductsApi } from "./features/topProducts/topProductsApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import reducers from "./reducers";
import { newProductsApi } from "./features/newProducts/newProductsApi";

export const store = configureStore({
  reducer: {
    [topProductsApi.reducerPath]: topProductsApi.reducer,
    [newProductsApi.reducerPath]: newProductsApi.reducer,
    ...reducers
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(topProductsApi.middleware, newProductsApi.middleware),
});

setupListeners(store.dispatch);
