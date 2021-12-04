import React from 'react'
import {Link} from "react-router-dom"
import "./register.scss"

function Register() {
  return (
    <div className="register">
      <form>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email"/>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password"/>
        <button className="btn" type="button">Sign Up</button>
        <p>Have account? <Link to="/login">Login Here</Link></p>
      </form>
    </div>
  )
}

export default Register
