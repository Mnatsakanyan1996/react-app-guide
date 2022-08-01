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
  selectedItem: null,
  selectedMainItem: null,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setSelectedMainItem: (state, data) => {
      state.selectedMainItem = data.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMenuItems.fulfilled, (state, action) => {
      state.items = action.payload;
      state.selectedMainItem = action.payload?.[0];
    });
  },
});

export const { setSelectedMainItem } = menuSlice.actions;

export default menuSlice.reducer;
