const express=require("express")
const propertyController = require("../controllers/property.controller")
const uploadOptions = require("../helpers/multer")
const router=express.Router()
const auth =require("../middlewares/auth")


router.get("/", propertyController.getAllProperty)
router.post("/add",auth(), uploadOptions.array('images', 5), propertyController.addProperty)
router.post("/paginate",auth(),propertyController.paginateProperty)
router.get("/ROOT/property_image/:id",propertyController.getImage)


module.exports= router