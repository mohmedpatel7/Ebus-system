import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authentication";

const store = configureStore({
  reducer: {
    authSlice: authSlice,
  },
});

export default store;
