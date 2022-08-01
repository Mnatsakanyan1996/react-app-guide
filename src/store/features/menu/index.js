import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { MENU_ITEMS } from 'api';
import Fetch from 'utils/fetch';

import { getSelectedItem } from './utils';

export const fetchMenuItems = createAsyncThunk(
  'menu/getMenuItems',
  async () => {
    const response = await Fetch.POST(MENU_ITEMS, {});
    return response.data;
  }
);

const initialState = {
  items: [],
  loading: false,
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
    setSelectedItem: (state, data) => {
      state.selectedItem = data.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMenuItems.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
      state.selectedMainItem = action.payload?.[0];
      state.selectedItem = getSelectedItem(action.payload?.[0]);
    });
    builder.addCase(fetchMenuItems.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMenuItems.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { setSelectedMainItem, setSelectedItem } = menuSlice.actions;

export default menuSlice.reducer;
