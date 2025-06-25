import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isUserMenuOpen: false,
  },
  reducers: {
    toggleUserMenu: (state) => {
      state.isUserMenuOpen = !state.isUserMenuOpen;
    },
    closeUserMenu: (state) => {
      state.isUserMenuOpen = false;
    },
  },
});

export const { toggleUserMenu, closeUserMenu } = uiSlice.actions;
export default uiSlice.reducer;
