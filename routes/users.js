const express=require('express');
const router=express.Router();
const passport=require('passport')
const usersController=require("../controllers/usersController");
router.get('/profile',passport.checkAuthentication, usersController.profile);
router.get('/dp',usersController.dp);
router.get('/signup',passport.checkAuthenticationsign,usersController.signup);
router.get('/signin',passport.checkAuthenticationsign, usersController.signin);
router.post('/create',usersController.create);
router.get('/signout',usersController.destroySession);
//use passport as midleware
router.post('/createSession',passport.authenticate(
    'local',
    {failureRedirect:'users/signin'}
), usersController.createSession);
module.exports=router;