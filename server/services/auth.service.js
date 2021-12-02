const User = require("../models/user")



const authService = {
  async registerUser(email,password){
    try{
    const user = new User({email,password})
    if(!user){
      throw Error("Invalid email or password!")
    }
    await user.save()
    return user
}catch(err){
  throw(err)
}
  },
  async genAuthToken(user){
    const token=user.generateAuthToken()
    return token
  },
  async signIn(email,password){
    const user= await User.findOne({email:email})
    if(!user){
      throw new Error("User not registered!")
    }
    await user.signInWithEmailAndPassword(password)
    return user
  }
}

module.exports = authService