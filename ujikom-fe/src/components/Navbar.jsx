import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
        <nav className='nav'>
              <div className="nav-logo">CARATEEN</div>
              <div className="nav-links">
                <Link to="/Dashboard" className='link'>Dashboard</Link>
                <Link to="/cart" className='link'>Cart</Link>
                <Link to="/Mall" className='link'>Mall</Link>
                <Link to="/history" className='link'>History</Link>

              </div>
            </nav>
    </>
  //    
  )
}

export default Navbar