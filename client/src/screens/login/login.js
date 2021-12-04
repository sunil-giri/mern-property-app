import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {Link , useNavigate} from "react-router-dom"
import { newUser } from '../../store/actions/user.action'
import "./login.scss"

function Login() {

  const history=useNavigate()
  const dispatch = useDispatch()
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [error,setError]=useState("")

  const getUserData=async()=>{
    return await axios.post("http://localhost:5000/api/auth/signin",{
      "email":email,
      "password":password
    })
  }

  const handleChange = (e)=>{
    if(e.target.name === "email"){
      setEmail(e.target.value)
    }else if(e.target.name==="password"){
      setPassword(e.target.value)
    }    
  }
  const userLogin = async (e) =>{
    try{
    setError("")
    if(email==="" || password ===""){
      setError("Fields cannot be empty")
    }
    const res= await getUserData()
    if(res){
      console.log(res)
      window.localStorage.setItem("x-access-token",res.data.token)
      dispatch(newUser(res.data.user))
      history("/",{replace:true})
    }
  }catch(err){
    console.log(err)
    setError("Invalid Email or password")
    }
  }

  return (
    <div className="login">
        <form>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" onChange={(e)=>handleChange(e)} />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" onChange={(e)=>handleChange(e)}/>
          <button className="btn" type="button" onClick={(e)=>userLogin(e)}>Sign In</button>
          {error!==""?<p className="error">{error}</p>:null}
          <p>New User? <Link to="/register">Register Here</Link></p>
        </form>
    </div>
  )
}

export default Login
