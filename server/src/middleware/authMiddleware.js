const jwt = require("jsonwebtoken");

const protect = async(req, res, next)=>{
    try{
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith("Bearer ")){
        return res.status(401).json({
            success:false,
            message:"Authentication Required"
        })
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user ={
        userId:decoded.userId,
        role:decoded.role,
    }

    next()
}catch(error){
    res.status(401).json({
        success:false,
        message:"Invalid or Expired token"
    })
}
}

module.exports = {
    protect,
}