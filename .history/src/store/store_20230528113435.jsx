import { configureStore } from "@reduxjs/toolkit";
import quoteSlice from "./slice/quoteSlice"

const store = configureStore({
    reducer:{
        quotes:quoteSlice
    }
})

export default store