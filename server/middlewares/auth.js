const passport=require("passport")


const verify = (req,res,resolve,reject)=>async(err,user)=>{
  if(err|| !user){
    return reject(new Error("Unauthorized"))
  }
  req.user=user
  resolve()
}


const auth= () =>async(req,res,next)=>{
  return new Promise((resolve,reject)=>{
    passport.authenticate("jwt",{session:false},verify(req,res,resolve,reject))(req,res,next)
  })
  .then(()=>next())
  .catch(err=>next(err))
}

module.exports = auth