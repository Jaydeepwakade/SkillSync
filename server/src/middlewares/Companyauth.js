const jwt = require("jsonwebtoken");

const JobMiddleware = async (req, res, next) => {
  const authheader = req.headers.authorization;
  if (!authheader || !authheader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "toke is not valid" });
  }
  const token = authheader.split(" ")[1];
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decode;
    console.log(decode, req.user.role)
    if (req.user.role === "company") {
      next();
    }
  } catch (error) {
    return res.status(401).json({ message: "error", error: error.message });
  }
};


module.exports= JobMiddleware