import { createSlice } from "@reduxjs/toolkit";


const quoteSlice = createSlice({
    name:"quoteSlice",
    initialState:{
        quotes:[],
        loading:false,
        error:null

    },

    reducer:{

    },
    extraReducer:{

    }
})

export default quoteSlice.reducer
export const {}=quoteSlice.actions