const Post=require('../models/post');
const User=require('../models/users');
module.exports.comments=function(req,res){
    console.log(" posts controller loaded");
    return res.end("UNo new comment");
    
}
module.exports.createpost=function(req,res){
    Post.create({
        user:req.user._id,
        content:req.body.content
    },function(err,user){
        if(err)
            console.log(err);
        Post.find({},
        Post.find({}).populate('user').exec(function(err,posts)
        {
            if(err){console.log('error in mongo');}
            
            return res.render('posts.ejs',{Posts:posts});
        }))
    });
    }