import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import productsSlice from './products/products';


const store = configureStore({
    reducer:{
        products: productsSlice
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk) 
})

export default store