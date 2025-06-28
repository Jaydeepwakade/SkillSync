const express = require("express")
const JobMiddleware = require("../../middlewares/Companyauth")
const jobModel = require("../../models/job.model")
const { postJob, getallJobs } = require("../../controllers/JobPost.controller")
const router = express.Router()

router.post("/Postjob",JobMiddleware,postJob)
router.get("/getjobs",getallJobs)
module.exports= router //