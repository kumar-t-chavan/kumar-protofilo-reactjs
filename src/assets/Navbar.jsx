import React from 'react'
import { Link } from 'react-router-dom' // ✅ import Link

const Navbar = () => {
  return (
    <div>
      <div className='Navbar'>
        <nav>
          <span className='logo'>
            <h1>PortFolio</h1>
          </span>

          {/* ✅ Add ul to wrap li */}
          <ul>
            <li><Link className='Link' to="/">Home</Link></li>
            <li><Link className='Link' to="/about">About</Link></li>
            <li><Link className='Link' to="/skills">Skills</Link></li>
            <li><Link className='Link' to="/participate">Participate</Link></li>
            <li><Link className='Link' to="/achievement">Achievement</Link></li>
            <li className='contact'><Link className='Link' to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
