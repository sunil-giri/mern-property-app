const express=require("express")
const propertyController = require("../controllers/property.controller")
const uploadOptions = require("../helpers/multer")
const router=express.Router()


router.get("/", propertyController.getAllProperty)
router.post("/add",uploadOptions.array('images', 5), propertyController.addProperty)
router.post("/paginate", propertyController.paginateProperty)



module.exports= router