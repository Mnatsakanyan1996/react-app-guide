import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { USER_LOGIN } from 'api';
import { partnerAlias } from 'configs';
import Fetch from 'utils/fetch';

export const fetchUserLogin = createAsyncThunk(
  'user/login',
  async (data) => {
    const response = await Fetch.POST(USER_LOGIN, data);
    return response.data;
  }
);

const initialState = {
  user: null,
  loading: false,
  isLoggedIn: !!localStorage.getItem(`token-${partnerAlias}`),
};

export const authorizeSlice = createSlice({
  name: 'authorize',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      localStorage.removeItem(`token-${partnerAlias}`);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserLogin.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload) {
        state.isLoggedIn = true;
        state.user = action.payload;
        localStorage.setItem(`token-${partnerAlias}`, JSON.stringify(action.payload.a1));
      }
    });
    builder.addCase(fetchUserLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUserLogin.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { logout } = authorizeSlice.actions;

export default authorizeSlice.reducer;
