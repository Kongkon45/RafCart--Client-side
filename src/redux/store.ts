import { configureStore, createSlice } from "@reduxjs/toolkit";
import { topProductsApi } from "./features/topProducts/topProductsApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import reducers from "./reducers";
import { newProductsApi } from "./features/newProducts/newProductsApi";
import { authApi } from "./features/auth/auth";


// auth slice 
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;

export const store = configureStore({
  reducer: {
    [topProductsApi.reducerPath]: topProductsApi.reducer,
    [newProductsApi.reducerPath]: newProductsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    auth: authSlice.reducer,
    ...reducers
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(topProductsApi.middleware, newProductsApi.middleware, authApi.middleware),
});

setupListeners(store.dispatch);
