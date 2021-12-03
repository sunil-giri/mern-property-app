 const authService=require("../services/auth.service")
 
 const authController = {
   async register(req,res,next){
      try{
        const user=await authService.registerUser(req.body.email,req.body.password)
        const token=await authService.genAuthToken(user)
        res.cookie("x-access-token",token).send({user,token})
      }catch(err){
        next(err)
      }
   },
   async signIn(req,res,next){
    try{
      const user = await authService.signIn(req.body.email,req.body.password)
      const token = await authService.genAuthToken(user)
      res.cookie("x-access-token",token).send({user,token})
    }catch(err){
      next(err)
    }
   }
 }

 
 module.exports =authController