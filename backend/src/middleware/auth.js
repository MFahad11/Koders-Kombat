const CustomError = require("../helpers/error/CustomError");
const memberModel = require("../models/schema/member")
const jwt = require("jsonwebtoken");
const asyncErrorWrapper =require("express-async-handler")
const { isTokenIncluded ,getAccessTokenFromHeader} = require("../helpers/auth/tokenHelpers");


const getAccessToRoute = asyncErrorWrapper(async(req,res,next) =>{

    // const {"herllokodpcnc"} =process.env ;

    if(!isTokenIncluded(req)) {

        return next(new CustomError("You are not authorized to access this route ", 401))
    }

    const accessToken = getAccessTokenFromHeader(req)

    const decoded = jwt.verify(accessToken,"herllokodpcnc") ;

    const user = await memberModel.findById(decoded.id)
   
    if(!user) {
        return next(new CustomError("You are not authorized to access this route ", 401))
    }

    req.user = user ; 

    next()

})



module.exports ={getAccessToRoute}