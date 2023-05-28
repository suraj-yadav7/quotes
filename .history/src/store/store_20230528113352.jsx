import { configureStore } from "@reduxjs/toolkit";
import quotesSlice from "./slice/quotesSlice"

const store = configureStore({
    reducer:{
        quotes:quotesSlice
    }
})

export default store