
const cloudinary = require('../config/Cloudinray')
const userModel = require('../models/user.model')
const UploadResume = async (req, res) => {
  console.log(req.user)
    try {
        if(!req.file) return res.status(400).json({message:"file not uploaded"})
        console.log("hii")

         const user =  await userModel.findById(req.user.id)
        const filepath = req.file.path
         cloudinary.uploader.upload(filepath , async(err,result)=>{
            if(err){
                res.status(400),json({message:"upload failed"})
            }

           
            user.resume= result.secure_url
             await user.save()
             res.status(200).json({message:"file upload succesfully", url:result.secure_url, user})
         })

          
    
    } catch (error) {
       res.status(500).json({message:error.message})
    }
}

 module.exports = UploadResume