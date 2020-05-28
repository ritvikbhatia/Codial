const express=require('express');
const router=express.Router();
const postsController=require("../controllers/postsControllers");
router.get('/comments',postsController.comments);
router.post('/createpost',postsController.createpost);
module.exports=router;