const User = require("../models/auth.model");
const ErrorResponse = require("../utils/errorResponse");
const jwt=require('jsonwebtoken')

const protect = async (req, res, next) => {
  const { authorization } = req.headers;
    console.log(authorization)
  try {
    if (authorization && authorization.startsWith("Bearer")) {
      const token = authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
     
      const user = await User.findById(decoded.user.id).select("-password");
     
      if (!user?._id){return next(new ErrorResponse("Unauthorized to access", 401));}
      req.user = user;
      next();
    }
  } catch (err) {
    
    next(new ErrorResponse("Unauthorized to access", 401));
  }
};


module.exports={
    protect
}