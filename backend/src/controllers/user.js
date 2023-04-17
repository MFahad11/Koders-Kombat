const service = require('../services/user')
const { catchAsync } = require('../helpers/error/request');
// const asyncErrorWrapper = require("express-async-handler")
// const User = require("../Models/user");
const User=require('../models/schema/member')
const Story = require("../models/schema/story");
// const CustomError = require("../Helpers/error/CustomError");
// const { comparePassword, validateUserInput } = require("../Helpers/input/inputHelpers");
// const cloudinary = require('../cloudinary/cloudinary');
// const path = require("path");
// const upload=require('../middleware/multer')
exports.profile = catchAsync(async (req, res, next) => {

  return res.status(200).json({
      success: true,
      data: req.user
  })

})


exports.editProfile = catchAsync(async (req, res, next) => {

  const { email, username } = req.body

  const user = await User.findByIdAndUpdate(req.user.id, {
      email, username,
      photo: req.savedUserPhoto
  },
      {
          new: true,
          runValidators: true
      })

  return res.status(200).json({
      success: true,
      data: user

  })

})


exports.changePassword = catchAsync(async (req, res, next) => {

  const { newPassword, oldPassword } = req.body

  if (!validateUserInput(newPassword, oldPassword)) {

      return next(new CustomError("Please check your inputs ", 400))

  }

  const user = await User.findById(req.user.id).select("+password")

  if (!comparePassword(oldPassword, user.password)) {
      return next(new CustomError('Old password is incorrect ', 400))
  }

  user.password = newPassword

  await user.save();


  return res.status(200).json({
      success: true,
      message: "Change Password  Successfully",
      user: user

  })

})


exports.addStoryToReadList = catchAsync(async (req, res, next) => {

  const { slug } = req.params
  const { activeUser } = req.body;

  const story = await Story.findOne({ slug })

  const user = await User.findById(activeUser._id)

  if (!user.readList.includes(story.id)) {

      user.readList.push(story.id)
      user.readListLength = user.readList.length
      await user.save();
  }

  else {
      const index = user.readList.indexOf(story.id)
      user.readList.splice(index, 1)
      user.readListLength = user.readList.length
      await user.save();
  }

  const status = user.readList.includes(story.id)

  return res.status(200).json({
      success: true,
      story: story,
      user: user,
      status: status
  })

})

exports.readListPage = catchAsync(async (req, res, next) => {

  const user = await User.findById(req.user.id)
  const readList = []

  for (let index = 0; index < user.readList.length; index++) {

      var story = await Story.findById(user.readList[index]).populate("author")

      readList.push(story)

  }

  return res.status(200).json({
      success: true,
      data: readList
  })

})
exports.createUser = catchAsync(async (req, res, next) => {

  // console.log(req.file.path)
  const payload = {
      fullName: req.body.fullname,
      email: req.body.email,
      phone: req.body.phone,
      university:req.body.university,
      batch:req.body.batch,
      interest:req.body.interest,
    };
    res.body = await service.createUser(payload,req.file.path);
    return res.json(res.body);
  });
  exports.createParticipents = catchAsync(async (req, res, next) => {
    const payload = {
      ...req.body
    };
    
      res.body = await service.createParticipents(payload);
      return res.json(res.body);
    });
  exports.updatePayment = catchAsync(async (req, res, next) => {
 
    const payload = {
      user: req.params.id,
      payment: true,
    };
  
    res.body = await service.updatePayment(payload);
    return res.json(res.body);
  });
  