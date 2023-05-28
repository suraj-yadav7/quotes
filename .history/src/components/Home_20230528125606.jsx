import React from 'react'
import "../styles/home.scss"
import { useDispatch, useSelector } from 'react-redux'
import { fetchQuotes } from '../store/slice/quoteSlice'

const Home = () => {
    const dispatch = useDispatch()
    const fetchData = useSelector((state)=>state.quotes.quoteData)
    
  return (
   <>
    <div className='navbar'>
        <nav>
            <ul>
                <li>Home</li>
                <li>Inspirational</li>
                <li>Fitness</li>
                <li>Happiness</li>
            </ul>
        </nav>
        <h3>The Quote: {fetchData[0].quote}</h3>
        <p>Author: {fetchData[0].author}</p>
        <p>Category: {fetchData[0].category}</p>
        <button onClick={()=>dispatch(fetchQuotes())}>Fetch data</button>
    </div>
   </>
  )
}

export default Home
