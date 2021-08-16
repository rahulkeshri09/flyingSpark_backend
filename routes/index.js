const express=require('express');
const router=express.Router();
const signupController=require('../controller/signUp_controller');
const loginController=require('../controller/login_controller');
router.post('/signup',signupController.signup);
router.post('/login',loginController.login);
module.exports=router;