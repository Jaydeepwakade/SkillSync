const jobModel = require("../models/job.model");

const postJob = async (req, res) => {
  try {

    const newJobpost = await  new jobModel({...req.body, postedby:req.user.id});
     await newJobpost.save();
    res.status(200).json({ message: "job posted succesfully" , newJobpost });
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

  const getallJobs = async(req,res)=>{

     try {
        const jobs = await  jobModel.find()
        res.status(200).json({message:' job etch suyccesfully', jobs})
     } catch (error) {
        res.status(401).json({message:"error while fetching the jobs",error:error.message})
     }
  }

module.exports = {postJob,getallJobs} 
 