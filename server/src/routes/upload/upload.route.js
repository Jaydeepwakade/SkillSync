const express = require("express")
const authMidllware = require("../../middlewares/AuthMiddleware")
const upload = require("../../middlewares/multer")
const UploadResume = require("../../controllers/upload.controller")
const router = express.Router()

 router.post("/upload", authMidllware,upload.single("resume"),UploadResume)

module.exports= router