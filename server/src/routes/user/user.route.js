const express = require("express");
const router = express.Router();
const authMiddleware = require("../../middlewares/AuthMiddleware")
const { getMe, updateProfile } = require("../../controllers/User.controller");


router.get("/me",authMiddleware, getMe);
router.put("/update", authMiddleware, updateProfile);

module.exports = router;
