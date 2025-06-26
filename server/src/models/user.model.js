const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, required: true },
  password: String,
  role: {
    type: String,
    enum: ["student", "company", "admin"],
    defualt: "student",
  },
  resume: String,
  bio: String,
  skills: [{ type: String }],
  profileImage: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", usersSchema);
