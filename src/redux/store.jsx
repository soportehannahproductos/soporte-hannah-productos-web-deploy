import { configureStore } from '@reduxjs/toolkit';
import { ecApi } from '../service/ecApi';
import authSlice from './slice/authSlice';

export const store = configureStore({
  reducer: {
    [ecApi.reducerPath]: ecApi.reducer,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ecApi.middleware),
});
