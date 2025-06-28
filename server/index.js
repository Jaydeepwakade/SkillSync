


require('dotenv').config();
const ConnectDB = require("./src/config/dbConection")
const express = require("express");
const Register = require("./src/routes/Auth/auth.route");
const UserRouter = require('./src/routes/user/user.route');
const UploadRouter = require('./src/routes/upload/upload.route')
const PostRouter = require("./src/routes/job/job.route")
const port = 4040;
const App = express();


App.use(express.json())
 
App.use("/auth",Register) 
App.use("/user",UserRouter)
App.use("/user", UploadRouter)
App.use("/company",PostRouter)

 
App.get("/", (req, res) => {
  
  console.log("server is running");

  res.send("server is ruuning  fine");

});

App.listen(port, async (req, res) => {
  try {
  
    await ConnectDB()  

    console.log("server is running",port);

  } catch (error) {
    console.log("error while listining")
  }
});
