import { configureStore } from '@reduxjs/toolkit';
import { categoriesApi } from './slice/categoriesApi';
import { colorsApi } from './slice/colorsApi';
import { productsApi } from './slice/productsApi';
import productsSlice from './slice/productsSlice';

export const store = configureStore({
  reducer: {
    productsSlice,
    [productsApi.reducerPath]: productsApi.reducer,
    [colorsApi.reducerPath]: colorsApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productsApi.middleware,
      colorsApi.middleware,
      categoriesApi.middleware,
    ),
});
