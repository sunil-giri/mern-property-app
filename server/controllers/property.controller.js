const httpStatus = require("http-status")
const { ApiError } = require("../middlewares/apiError")
const Property = require("../models/property")
const propertyService = require("../services/property.service")



const propertyController = {
  async getAllProperty(req,res,next){
    try{
    const property = await propertyService.getAllProperty()
    res.json({property})
  }catch(err){
    next(err)
  }
  },
  async addProperty(req,res,next){
    try{
      console.log(req.body)
      const property= await propertyService.addProperty(req)
      res.json({property})
    }catch(err){
      next(err)
    }
  },
  async getPropertyByLocality(req,res,next){

  },
  async getPropertyByDate(req,res,next){

  },
  async getPropertyByPrice(req,res,next){

  }
}


module.exports = propertyController