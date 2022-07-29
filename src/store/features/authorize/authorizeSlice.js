import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: true,
};

export const authorizeSlice = createSlice({
  name: 'authorize',
  initialState,
  reducers: {
    toggleState: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});

export const { toggleState } = authorizeSlice.actions;

export default authorizeSlice.reducer;
