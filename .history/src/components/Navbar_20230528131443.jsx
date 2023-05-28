import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
        <nav>
            <ul>
                <Link to="/">Home</Link>
                <Link to="inspiratinal">Inspirational</Link>
                <Link to="/fitness">Fitness</Link>
                <Link to="/happiness">Happiness</Link>
            </ul>
        </nav>
    </div>
    </>
  )
}

export default Navbar
