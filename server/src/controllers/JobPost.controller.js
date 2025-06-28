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

module.exports = {postJob}
 