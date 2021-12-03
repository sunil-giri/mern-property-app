import React from 'react'
import "./header.scss"
import {Link} from "react-router-dom"
function Header() {
  return (
    <div className="navbar">
      <ul className="nav">
      <li><Link to="/">Property App</Link></li>
      <li><Link to="/">Login/Sign Up</Link></li>
      </ul>
    </div>
  )
}

export default Header
