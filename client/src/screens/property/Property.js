import axios from 'axios'
import React, { useState } from 'react'
import "./property.scss"

function Property() {

  const [formData,setFormData] =useState({
    name:"",
    description:"",
    images:[],
    address:"",
    locality:"",
    price:0
  })

  const handleChange =(e) =>{
    const keyId=e.target.name
    const value=e.target.value
    let formValue=formData
    if(keyId=="images"){
      formValue[keyId].push(e.target.files[0])
    }else{
      formValue[keyId]=value
    }
    setFormData(formValue)
  }

  const postData=async()=>{
    let token=window.localStorage.getItem("x-access-token")
    let formValues= new FormData()
    let imageArray=[]
    let images= document.querySelectorAll(".images")
    images.forEach((data)=>{
      imageArray.push(data.files[0])
    })
    console.log(imageArray)
    for( let i = 0; i < imageArray.length; i++ ){
      formValues.append('images',imageArray[i]);
    }
    formValues.append("name",formData.name)
    formValues.append("description",formData.description)
    formValues.append("address",formData.address)
    formValues.append("locality",formData.locality)
    formValues.append("price",formData.price)
    return await axios.post("http://localhost:5000/api/property/add",formValues,
    { mode: 'cors',
      headers: {
        'Content-Type': 'multipart/form-data',
        "Authorization": `Bearer ${token}`
      }})
  }

  const handleClick =() =>{
    // console.log(formData)
    postData()
  }

  return (
    <div className="property">
      <p>Fill Property Details</p>
      <form>
        <label htmlFor="name">Title</label>
        <input type="text" name="name" id="name" onChange={(e)=>handleChange(e)}/>
        <label htmlFor="description">Description</label>
        <input type="text" name="description" id="description" onChange={(e)=>handleChange(e)}/>
        <label htmlFor="images">Add Image</label>
        <input type="file" className="images" name="images" id="image1" onChange={(e)=>handleChange(e)}/>
        <input type="file" className="images" name="images" id="image2" onChange={(e)=>handleChange(e)}/>
        <input type="file" className="images" name="images" id="image3" onChange={(e)=>handleChange(e)}/>
        <input type="file" className="images" name="images" id="image4" onChange={(e)=>handleChange(e)}/>
        <input type="file" className="images" name="images" id="image5" onChange={(e)=>handleChange(e)}/>
        <label htmlFor="address">Address</label>
        <input type="text" name="address" id="address" onChange={(e)=>handleChange(e)}/>
        <label htmlFor="locality">Locality</label>
        <input type="text" name="locality" id="locality" onChange={(e)=>handleChange(e)}/>
        <label htmlFor="price">Price</label>
        <input type="text" name="price" id="price" onChange={(e)=>handleChange(e)}/>
        <button type="button" onClick={handleClick}>Add Property</button>
      </form>
    </div>
  )
}

export default Property
