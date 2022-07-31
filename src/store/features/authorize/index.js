import { createSlice } from '@reduxjs/toolkit';
import { partnerAlias } from 'configs';

const initialState = {
  user: null,
  isLoggedIn: !!localStorage.getItem(`token-${partnerAlias}`),
};

export const authorizeSlice = createSlice({
  name: 'authorize',
  initialState,
  reducers: {
    login: (state, data) => {
      state.user = data.payload;
      localStorage.setItem(`token-${partnerAlias}`, JSON.stringify(data.payload.a1));
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem(`token-${partnerAlias}`);
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authorizeSlice.actions;

export default authorizeSlice.reducer;
