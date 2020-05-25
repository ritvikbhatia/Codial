const express=require('express');
const router=express.Router();
const postsController=require("../controllers/postsControllers");
router.get('/comments',postsController.comments);
module.exports=router;