const express = require('express');
const authController = require('../controllers/authController');
// const { identifier } = require('../middlewares/identification');
const router = express.Router();

//.post defines the route for handling http post req(data add krne k liye)
// router.post('/signup',(req,res)=>{
// 	res.json({message:"Signup success"})
// })
router.post('/signup', authController.signup);
// router.post('/signin', authController.signin);
// router.post('/signout', identifier, authController.signout);

// router.patch(
// 	'/send-verification-code',
// 	identifier,
// 	authController.sendVerificationCode
// );
// router.patch(
// 	'/verify-verification-code',
// 	identifier,
// 	authController.verifyVerificationCode
// );
// router.patch('/change-password', identifier, authController.changePassword);
// router.patch(
// 	'/send-forgot-password-code',
// 	authController.sendForgotPasswordCode
// );
// router.patch(
// 	'/verify-forgot-password-code',
// 	authController.verifyForgotPasswordCode
// );

module.exports = router;