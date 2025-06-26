const mongoose = require("mongoose");
require('dotenv').config();

const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ Error while connecting to the DB:", err.message);
  }
};

module.exports = ConnectDB;
