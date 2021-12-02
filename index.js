const express=require("express")
const mongoSanitize=require("express-mongo-sanitize")
const xss= require("xss-clean")
const app=express()
const mongoose=require("mongoose")
const routes= require("./server/routes")
const passport = require("passport")
const jwtStrategy = require("./server/middlewares/passport")
const { convertToApiError, handleError } = require("./server/middlewares/apiError")
require("dotenv").config()

mongoose.connect(`${process.env.DB_STRING}`,{
  useNewUrlParser:true,
  useUnifiedTopology:true
},()=>{
  console.log("DB connected.")
})

app.use(express.json())
app.use(xss())
app.use(mongoSanitize())



//passport
app.use(passport.initialize())
passport.use("jwt",jwtStrategy)

app.use("/api",routes)

app.use(convertToApiError)
app.use((err,req,res,next)=>{
  handleError(err,res)
})

const port=process.env.PORT || 5000

app.listen(port,()=>{
  console.log(`Server started at port ${port}`)
})