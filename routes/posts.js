const express=require('express');
const passport=require('passport');
const router=express.Router();
const postsController=require("../controllers/postsControllers");
router.get('/comments',postsController.comments);
router.post('/createpost',passport.checkAuthentication, postsController.createpost);
module.exports=router;