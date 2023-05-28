import React from 'react'
import './App.css'
import Home from './components/Home'
import Fitness from './components/Fitness'
import Inspirational from './components/Inspirational'
import Happiness from './components/Happiness'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <Router>
      <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/fitness" element={<Fitness />} />
      <Route exact path="/inspiratinal"  element={<Inspirational />} />
      <Route exact path="/happiness"  element={ <Happiness />} />
     

    </Routes>
    </Router>
    </>
  )
}

export default App
