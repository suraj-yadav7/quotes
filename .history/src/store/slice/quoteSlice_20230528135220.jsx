import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchQuotes = createAsyncThunk("fetchQuotes",async(arg,{rejectWithValue})=>{
    let response = await fetch("https://api.api-ninjas.com/v1/quotes?category=fitness",{
        method:"GET",
        headers:{
            "X-Api-Key":"MKsow2F2MHISb5jV14oA+Q==nvH7KU0O50jgm60V",
            "content-type":"application/json"
        },
    })

    try{
        let apiData = await response.json()
        console.log("the apiData", apiData[0])
        return apiData[0]

    }
    catch(error){
        rejectWithValue(error)
    }
})


const quoteSlice = createSlice({
    name:"quoteSlice",
    initialState:{
        quoteData:[],
        loading:false,
        error:null
    },

    reducers:{

    },
    extraReducers:{
        [fetchQuotes.pending]:(state)=>{
            state.loading=true
        },
        [fetchQuotes.fulfilled]:(state,action)=>{
            state.quoteData=(action.payload)
            state.loading=false
        },
        [fetchQuotes.rejected]:(state,action)=>{
            state.error=action.payload
        },

    }
})

export default quoteSlice.reducer
export const {}=quoteSlice.actions