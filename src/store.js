import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./modules/Authentication/slices/authSlice";

const store = configureStore({
   reducer: {
		auth: authReducer,
	 },
});

export default store;
