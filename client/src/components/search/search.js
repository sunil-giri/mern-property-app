import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProperty } from '../../store/actions/property.action'
import "./search.scss"

function Search() {

  const getData =async(page,value)=>{
    let token=window.localStorage.getItem("x-access-token")
    return await axios.post("http://localhost:5000/api/property/paginate",{
      "page":page,
      "keyword":value
    },{
      headers:{
        "Authorization": `Bearer ${token}`
    }
    })
  }
  const dispatch= useDispatch()
  const [searchValue,setSearchValue]=useState("")
  const handleClick = async(e) =>{
    const res=await getData(1,searchValue)
    dispatch(addProperty(res.data.docs))
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
  }
  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search..." value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}/>
        <button type="submit" className="btn" onClick={handleClick}>Search</button>
      </form>
    </div>
  )
}

export default Search
