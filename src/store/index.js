import { configureStore } from '@reduxjs/toolkit';

import menuSlice from './features/menu';
import authorizeSlice from './features/authorize';

export const store = configureStore({
  reducer: {
    authorize: authorizeSlice,
    menu: menuSlice,
  },
});
