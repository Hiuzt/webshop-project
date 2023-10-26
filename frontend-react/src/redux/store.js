import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import productReducer from "./features/productSlice";
import categoryReducer from "./features/categorySlice";
import reviewReducer from "./features/reviewSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productReducer,
        categories: categoryReducer,
        reviews: reviewReducer
    }
});