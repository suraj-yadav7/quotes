import React,{useEffect} from "react"
import { fetchQuotes } from '../store/slice/quoteSlice'
import { useDispatch, useSelector } from 'react-redux'
import "../styles/home.scss"


const Inspirational = ()=>{
    const dispatch = useDispatch()
    const fetchData = useSelector((state) => state.quotes.quoteData)
    const {loading} = useSelector((state) => state.quotes)
    const categoryInpiratinal = "inspirational"
    useEffect(()=>{
        dispatch(fetchQuotes(categoryInpiratinal))
    },[])
    return(
        <>
        <div className='main bgImgInspirational'>
        {loading?<div className='loading'><h4>Loading.....</h4></div>:   <div className='quote'>
                <p>Quote: {fetchData.quote}</p>
                <p className='author'>Author: {fetchData.author}</p>
                <button onClick={() => dispatch(fetchQuotes(categoryInpiratinal))}>Get More..</button> 
            </div> }
         
        </div>
        
        </>


    )
}

export default Inspirational;