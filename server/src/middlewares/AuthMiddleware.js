
const jwt = require("jsonwebtoken")


const authMidllware= (req,res,next)=>{
  const authheader = req.headers.authorization;
   if(!authheader || !authheader.startsWith("Bearer")){
    return res.status(401).json({message:"no authorize please login first"})
   }

    const token = authheader.split(" ")[1]

    try {
        const decode = jwt.verify(token,process.env.JWT_SECRET)
        req.user =decode;
        next()
    } catch (error) {
        return  res.status(401).json({message:"error ", error:error.message})
    }
}
module.exports =authMidllware