import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./modules/Authentication/slices/authSlice";
import spacingReducer from "./modules/RoomList/slices/spacingSlice";

const store = configureStore({
   reducer: {
      auth: authReducer,
      spacing: spacingReducer,
   },
});

export default store;
