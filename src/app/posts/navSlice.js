import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "nav",
  initialState: {
    items: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Articles", href: "/articles" },
    ],
  },
  reducers: {
    addMenuItem: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { addMenuItem } = navSlice.actions;
export default navSlice.reducer;
