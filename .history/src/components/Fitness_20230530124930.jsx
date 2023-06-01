import React from "react"
import "../styles/fitness.scss"

const Fitness = ()=>{
    const categoryFitness = "fitness"
    return(
        <>
        <div className='fitnessMain'>
        {loading?<div className='loading'><h4>Loading.....</h4></div>:   <div className='fitnessQuote'>
                <p>Quote: {fetchData.quote}</p>
                <p className='author'>Author: {fetchData.author}</p>
                <button onClick={() => dispatch(fetchQuotes(categoryFitness))}>Get More..</button> 
            </div> }
         
        </div>
        
        </>


    )
}

export default Fitness;