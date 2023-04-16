const express = require("express");
const router = express.Router();
const userController = require('../controllers/user');
const authController=require('../controllers/auth')
const upload=require('../middleware/multer')
const { getAccessToRoute } = require("../middleware/auth");
router.post("/membership", upload.single("profileImg"),userController.createUser);
router.get('/user',(req,res)=>{
    console.log(1)
})
router.post("/register",userController.createParticipents);
// router.put("/user/:id", userController.updatePayment);
router.post("/login",authController.login)
router.get("/profile",getAccessToRoute ,userController.profile)
// router.post("/:slug/addStoryToReadList",getAccessToRoute ,addStoryToReadList)
router.get("/readList",getAccessToRoute ,userController.readListPage)
router.get("/private",getAccessToRoute,authController.getPrivateData)
module.exports = router;