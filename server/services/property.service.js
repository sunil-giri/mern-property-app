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
      const basePath = `http://localhost:5000/api/property/ROOT/property_image/`;
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
  async paginateProperty(req){
    try{

      let aggregateQuery=[]

      if(req.body.keyword && req.body.keyword !=""){
        const re= new RegExp(`${req.body.keyword}`,'gi')
        aggregateQuery.push({
          $match:{name:{$regex: re}}
        })
      }

      if(req.body.locality && req.body.locality!=""){
        aggregateQuery.push({
          $match:{locality:req.body.locality}
        })
      }

      if(req.body.min && req.body.min > 0 || req.body.max && req.body.max < 50000000){
        

        if(req.body.min){
            aggQueryArray.push({ $match: { price:{ $gt: req.body.min }}});
            
        }
        if(req.body.max){
            aggQueryArray.push({ $match: { price:{ $lt: req.body.max }}});
           
        }
    }

    if(req.body.date && req.body.date!=""){
      aggregateQuery.push({
        $match:{dateAdded:{$lt:req.body.date}}
      })
    }

    let aggQuery=Property.aggregate(aggregateQuery)
    const options={
      page:req.body.page,
      limit:10,
      sort:{dateAdded:"desc"}
    }

    const property= await Property.aggregatePaginate(aggQuery,options)
    return property
    }catch(err){
      throw err
    }
  }
}

module.exports= propertyService