const express=require("express")
const propertyController = require("../controllers/property.controller")
const uploadOptions = require("../helpers/multer")
const router=express.Router()


router.get("/", propertyController.getAllProperty)
router.post("/add",uploadOptions.array('images', 5), propertyController.addProperty)
router.post("/locality", propertyController.getPropertyByLocality)
router.post("/date", propertyController.getPropertyByDate)
router.post("/price", propertyController.getPropertyByPrice)


module.exports= router