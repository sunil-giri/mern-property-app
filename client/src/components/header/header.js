import React from 'react'
import "./header.scss"
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { newUser } from '../../store/actions/user.action'


function Header() {
  const user = useSelector(state=>state.users.email)
  const dispatch = useDispatch()
  const handleClick=()=>{
    window.localStorage.clear()
    dispatch(newUser({}))
  }
  return (
    <div className="navbar">
      <ul className="nav">
      <li><Link to="/">Property App</Link></li>
      {!user?<li>
        <Link to="/login">Login/Sign Up</Link>
        </li>:
      <li><Link to="/" onClick={handleClick}>Sign Out</Link></li>
      }
      </ul>
    </div>
  )
}

export default Header
