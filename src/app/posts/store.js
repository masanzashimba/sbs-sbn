import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./postSlice";
import authReducer from "./authSlice";
import navReducer from "./navSlice";
import uiReducer from "./uiSlice";

export const store = configureStore({
  reducer: {
    posts: postReducer,
    auth: authReducer,
    nav: navReducer,
    ui: uiReducer,
  },
});
