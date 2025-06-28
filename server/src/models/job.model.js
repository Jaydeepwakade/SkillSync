const mongoose = require("mongoose");

const jobschema = new mongoose.Schema({
  title: { type: String, required: [true, "title is required"] },
  company: { type: String, required: [true, "company name is required"] },
  location: { type: String, default: "Remote" },
  salary: { type: String },
  jobtype: {
    type: String,
    enum: ["Part-time", "Fulltime", "Internship", "Contract"],
    default: "Fulltime",
  },
  description: { type: String, required: true },
  Skillrequired: { type: [String], default: [] },
  postedby: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

module.exports = mongoose.model("Job",jobschema)
