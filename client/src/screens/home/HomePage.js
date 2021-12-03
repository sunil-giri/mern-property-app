import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../../components/card/card'
import Footer from '../../components/footer/footer'
import Search from '../../components/search/search'
import "./HomePage.scss"

function HomePage() {
  const [data,setData]=useState("")
  
  const getData =async()=>{
    return await axios.get("http://localhost:5000/api/property/")
  }

  useEffect(()=>{
   async function fetchData(){
     const res=await getData()
     setData(res.data)
   }
   fetchData()
  },[])


  return (
    <div className="homepage">
      <Search />
      <p className="title">Browse Properties</p>
      <div className="gridview">
      {data!=""?data.property.map((val)=>{
        return <Card value={val}/>
      }):null}
      </div>
      <Footer/>
    </div>
  )
}

export default HomePage
