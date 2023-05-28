import React from 'react'
import "../styles/home.scss"
import { useDispatch } from 'react-redux'
import { fetchQuotes } from '../store/slice/quoteSlice'

const Home = () => {
    const dispatch = useDispatch()
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
        <button onClick={()=>dispatch(fetchQuotes())}>Fetch data</button>
    </div>
   </>
  )
}

export default Home
