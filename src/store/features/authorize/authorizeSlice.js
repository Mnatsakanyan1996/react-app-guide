import { createSlice } from '@reduxjs/toolkit';
import { partnerAlias } from 'configs';

const initialState = {
  user: localStorage.getItem(`user-${partnerAlias}`) || null,
  isLoggedIn: !!localStorage.getItem(`user-${partnerAlias}`),
};

export const authorizeSlice = createSlice({
  name: 'authorize',
  initialState,
  reducers: {
    toggleState: (state, data) => {
      state.user = data.payload;
      localStorage.setItem(`user-${partnerAlias}`, JSON.stringify(data.payload));
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});

export const { toggleState } = authorizeSlice.actions;

export default authorizeSlice.reducer;
