import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authentication";
import busSlice from "../features/buses";

const store = configureStore({
  reducer: {
    authSlice: authSlice,
    busSlice: busSlice,
  },
});

export default store;
