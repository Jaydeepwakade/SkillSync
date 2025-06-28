const express = require("express")
const JobMiddleware = require("../../middlewares/Companyauth")
const jobModel = require("../../models/job.model")
const { postJob } = require("../../controllers/JobPost.controller")
const router = express.Router()

router.post("/Postjob",JobMiddleware,postJob)
module.exports= router //