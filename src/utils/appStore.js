import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const appStore = configureStore({
  reducer: {
    // Add your reducers here
    user : userSlice,
  },
});

export default appStore;