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
            <li><Link className='Link' to="/participate">Projects</Link></li>
            <li className='xyz'><Link className='Link' to="/achievement">Achievement</Link></li>
            <li className='xyz'><Link className='Link' to="/contact" style={{backgroundColor: "#381409",padding: "8px",borderRadius:"3px",paddingLeft:"40px",paddingRight:"40px"}}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
