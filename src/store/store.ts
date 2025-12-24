'use client';

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartslice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// Export RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
