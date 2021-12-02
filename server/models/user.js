const mongoose=require("mongoose")
const validator =require("validator")
const bcrypt=require("bcrypt")
const jwt= require("jsonwebtoken")
require("dotenv").config()

const userSchema = mongoose.Schema({
  email:{
    type:String,
    required:true,
    unique:true,
    trim:true,
    validate(value){
      if(!(validator.isEmail(value))){
        throw Error("Email is invalid")
      }
    }
  },
  password:{
    type:String,
    required:true,
    trim:true,
    minLength:8
  },
  firstName:{
    type:String,
    default:"",
    maxLength:255
  },
  lastName:{
    type:String,
    default:"",
    maxLength:255
  },
  dob:{
    type:String,
  }
})

userSchema.pre("save",async function(next){
  let user=this;
  if(user.isModified("password")){
    let salt=await bcrypt.genSalt(10)
    let hash=await bcrypt.hash(user.password,salt)
    user.password=hash
  }
  next()
})

userSchema.methods.generateAuthToken = function(){
  let user=this
  let userObj={sub: user._id.toHexString()}
  const token= jwt.sign(userObj,process.env.DB_SECRET,{expiresIn:"1d"})
  return token
}

userSchema.methods.signInWithEmailAndPassword =async function(candidatePassword){
  let user=this
  const match=await bcrypt.compare(candidatePassword,user.password)
  return match
}


const User=mongoose.model("User",userSchema)

module.exports = User