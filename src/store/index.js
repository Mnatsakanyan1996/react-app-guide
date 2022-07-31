import { configureStore } from '@reduxjs/toolkit';

import authorizeSlice from './features/authorize/authorizeSlice';

export const store = configureStore({
  reducer: {
    authorize: authorizeSlice,
  },
});
