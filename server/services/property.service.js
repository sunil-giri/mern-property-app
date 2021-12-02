const httpStatus = require("http-status")
const moment = require("moment")
const { ApiError } = require("../middlewares/apiError")
const Property = require("../models/property")

const propertyService= {
  async getAllProperty(){
    try{
      const property = await Property.find({})
      return property
    }catch(err){
      throw(err)
    }
  },
  async addProperty(req){
    // console.log(req.body)
    const {name,description,address,locality,price} = req.body
    let imagesPaths = [];
      const basePath = `http://localhost:5000/ROOT/property_image/`;
    const files=req.files
      if (files) {
        files.map((file) => {
            imagesPaths.push(`${basePath}${file.filename}`);
        });
      }
    const property= new Property({
        name,
        description,
        address,
        locality,
        price,
        images:imagesPaths,      
        dateAdded:moment().format('DD-MM-YYYY, h:mm:ss a')})
    if(!property){
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR)
    }
    await property.save()
    return property
  },
  async getPropertyByLocality(){

  },
  async getPropertyByDate(){

  },
  async getPropertyByPrice(){

  }
}

module.exports= propertyService