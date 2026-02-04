import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "../slice/slice";

export const store = configureStore({
    reducer: {
        products: productsReducer,
    }
})