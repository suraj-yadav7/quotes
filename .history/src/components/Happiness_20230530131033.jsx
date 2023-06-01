import React,{useEffect} from "react"
import { fetchQuotes } from '../store/slice/quoteSlice'
import { useDispatch, useSelector } from 'react-redux'
import "../styles/home.scss"

const Happiness = ()=>{
    const dispatch = useDispatch()
    const fetchData = useSelector((state) => state.quotes.quoteData)
    const {loading} = useSelector((state) => state.quotes)
    const categoryHappiness = "happiness"
    useEffect(()=>{
        dispatch(fetchQuotes(categoryHappiness))
    },[])
    return(
        <>
        <div className='main bgImgHappiness'>
        {loading?<div className='loading'><h4>Loading.....</h4></div>:   <div className='quote'>
                <p>{fetchData.quote}</p>
                <p className='author'>Author: {fetchData.author}</p>
                <button onClick={() => dispatch(fetchQuotes(categoryHappiness))}>Get More..</button> 
            </div> }
         
        </div>
        
        </>


    )
}

export default Happiness;