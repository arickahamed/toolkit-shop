import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import profileSlice from "./profileSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: profileSlice,
    }
});

export default store;