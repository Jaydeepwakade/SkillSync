// const cloudinary = require("cloudinary")
const cloudinary = require('cloudinary').v2
const dotenv = require("dotenv")
dotenv.config()


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.ClOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})
module.exports = cloudinary 