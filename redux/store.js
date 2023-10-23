import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './features/search-slice';

export const store = configureStore({
  reducer: {
    search:searchSlice,
    // auth:AuthProvider(),
  },
})