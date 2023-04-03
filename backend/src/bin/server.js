const express = require("express");
const app = express();
const port = 4500;
const dotenv = require("dotenv")
const cors = require('cors');
const path=require('path')
// const IndexRoute = require("../Routes/index")
// const connectDatabase = require("./Helpers/database/connectDatabase")
// const customErrorHandler = require("./Middlewares/Errors/customErrorHandler")
const courseRoute=require('../Routes/course')
const lectureRoute=require('../Routes/lecture')
const userRoute=require('../Routes/user')
const compilerRoute=require("../Routes/compiler")
const storyRoute=require('../Routes/story')
const paymentRoute=require("../Routes/payment")
const lectureModel=require("../models/schema/lecture")
const questionRoute=require("../Routes/question")
var bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
require("../bootstrap/index");
dotenv.config({path:'../config/'})
// connectDatabase()
// const port=process.env.PORT
app.use(express.json());
// app.use("/api",IndexRoute)
// app.use(customErrorHandler)
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors())


//MIDDLEWARES






//Routes

// app.use('/api',courseRoute)
// app.use('/api',lectureRoute)
// app.use('/api',questionRoute)
app.use("/api/user",userRoute)
app.use("/api/story",storyRoute)
// app.use('/api',compilerRoute)
// app.use('/api',paymentRoute)
app.use(bodyParser.json());
//Routes


app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
