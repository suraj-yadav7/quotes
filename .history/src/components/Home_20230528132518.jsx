import React from 'react'
import "../styles/home.scss"
import { useDispatch, useSelector } from 'react-redux'
import { fetchQuotes } from '../store/slice/quoteSlice'

const Home = () => {
    const dispatch = useDispatch()
    const fetchData = useSelector((state) => state.quotes.quoteData)

    return (
        <>
            <div className='main'>
                <h3>The Quote: {fetchData.quote}</h3>
                <p>Author: {fetchData.author}</p>
                <p>Category: {fetchData.category}</p>
                <button onClick={() => dispatch(fetchQuotes())}>Fetch data</button>
            </div>
        </>
    )
}

export default Home
