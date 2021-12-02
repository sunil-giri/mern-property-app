const mongoose=require("mongoose")

const propertySchema= mongoose.Schema({
  name:{
    type:String,
    required:true,
    unique:true,
    trim:true,
    maxLength:255
  },
  description:{
    type:String,
    default:""
  },
  images:{
    type:Array,
    maxLength:5
  },
  address:{
    type:String
  },
  locality:{
    type:String
  },
  price:{
    type:String,
    required:true
  },
  dateAdded:{
    type:Date,
    required:true
  }
})

const Property=mongoose.model("Property",propertySchema)

module.exports = Property