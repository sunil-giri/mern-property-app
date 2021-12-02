const mongoose=require("mongoose")
const aggregatePaginate =require("mongoose-aggregate-paginate-v2")


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

propertySchema.plugin(aggregatePaginate)

const Property=mongoose.model("Property",propertySchema)

module.exports = Property