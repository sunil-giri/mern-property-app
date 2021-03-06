import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../components/card/card'
import Search from '../../components/search/search'
import { addProperty } from '../../store/actions/property.action'
import "./HomePage.scss"

function HomePage() {
  const [data,setData]=useState("")
  const dispatch = useDispatch()
  
  const getData =async(page)=>{
    let token=window.localStorage.getItem("x-access-token")
    console.log(token)
    return await axios.post("http://localhost:5000/api/property/paginate",{
      "page":page
    },{
      headers:{
        "Authorization": `Bearer ${token}`
    }
    })
  }

  useEffect(()=>{
  
   async function fetchData(){
     const res=await getData(1)
     setData(res.data)
     dispatch(addProperty(res.data.docs))
   }
   fetchData()
  },[])

  const propertyArray = useSelector(state=>state.property)

  return (
    <div className="homepage">
      <Search />
      <p className="title">Browse Properties</p>
      <div className="gridview">
      {propertyArray!=undefined?propertyArray.map((val,idx)=>{
        return <Card value={val} key={idx}/>
      }):null}
      </div>
    </div>
  )
}

export default HomePage
