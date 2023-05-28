import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchQuotes = createAsyncThunk("fetchQuotes",async(arg,{rejectWithValue})=>{
    let myKey="MKsow2F2MHISb5jV14oA+Q==nvH7KU0O50jgm60V"
    let response = await fetch("https://api.api-ninjas.com/v1/quotes?category=fitness",{
        method:"GET",
        headers:{
            "X-Api-Key":"myKey",
            "content-type":"application/json"
        },
    })

    try{
        let apiData = await response.json()
        console.log("the apiData", apiData)
        return apiData

    }
    catch(error){
        rejectWithValue(error)
    }
})


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