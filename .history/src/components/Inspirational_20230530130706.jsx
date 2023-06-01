import React,{useEffect} from "react"
import { fetchQuotes } from '../store/slice/quoteSlice'
import { useDispatch, useSelector } from 'react-redux'
import "../styles/home.scss"


const Inspirational = ()=>{
    const dispatch = useDispatch()
    const fetchData = useSelector((state) => state.quotes.quoteData)
    const {loading} = useSelector((state) => state.quotes)
    const categoryInpiratinal = "fitness"
    useEffect(()=>{
        dispatch(fetchQuotes(categoryFitness))
    },[])
    return(
        <>
        <div className='main bgImgInspirational'>
        {loading?<div className='loading'><h4>Loading.....</h4></div>:   <div className='quote'>
                <p>Quote: {fetchData.quote}</p>
                <p className='author'>Author: {fetchData.author}</p>
                <button onClick={() => dispatch(fetchQuotes(categoryFitness))}>Get More..</button> 
            </div> }
         
        </div>
        
        </>


    )
}

export default Inspirational;