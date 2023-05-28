import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
        <nav>
            <ul>
                <Link to="/" className="link">Home</Link>
                <Link to="inspiratinal" className="link">Inspirational</Link>
                <Link to="/fitness" className="link">Fitness</Link>
                <Link to="/happiness" className="link">Happiness</Link>
            </ul>
        </nav>
    </div>
    </>
  )
}

export default Navbar
