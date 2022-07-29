import { configureStore } from '@reduxjs/toolkit';

import authorizeSlice from './features/authorize/authorizeSlice';
import counterSlice from './features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    authorize: authorizeSlice,
  },
});
