import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cartSlice";
import productSlice from "../features/productSlice";

export default configureStore({
    reducer:{
        cartSlice,
        productSlice,
    }
})



