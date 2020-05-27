const express=require('express');
const router=express.Router();
const passport=require('passport')
const usersController=require("../controllers/usersController");
router.get('/profile',usersController.profile);
router.get('/dp',usersController.dp);
router.get('/signup',usersController.signup);
router.get('/signin',usersController.signin);
router.post('/create',usersController.create);
//use passport as midleware
router.post('/createSession',passport.authenticate(
    'local',
    {failureRedirect:'users/signin'}
), usersController.createSession);
module.exports=router;