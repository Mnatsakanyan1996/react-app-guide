import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { MENU_ITEMS } from 'api';
import Fetch from 'utils/fetch';

export const fetchMenuItems = createAsyncThunk(
  'users/menuItems',
  async () => {
    const response = await Fetch.POST(MENU_ITEMS, {});
    return response.data;
  }
);

const initialState = {
  items: [],
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMenuItems.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export default menuSlice.reducer;
