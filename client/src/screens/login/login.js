import React from 'react'
import {Link} from "react-router-dom"
import "./login.scss"

function Login() {
  return (
    <div className="login">
        <form>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email"/>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password"/>
          <button className="btn" type="button">Sign In</button>
          <p>New User? <Link to="/register">Register Here</Link></p>
        </form>
    </div>
  )
}

export default Login
