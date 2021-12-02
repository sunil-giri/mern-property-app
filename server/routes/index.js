const express= require("express")
const router=express.Router()
const authRoute=require("./auth.route")
const propertyRoute= require("./property.route")

const routeIndex=[
  {
    path:"/auth",
    route:authRoute
  },
  {
    path:"/property",
    route:propertyRoute
  }
]


routeIndex.forEach((route)=>{
  router.use(route.path,route.route)
})

module.exports=router

