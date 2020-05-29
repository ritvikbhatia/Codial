// const mongoose=require('mongoose');
// const user=require('./users');
// const post=require('./post');
// const CommentSchema= new mongoose.Schema({
//     content:{
//         type:String,
//         required:true,
//     },
//     user:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:user
//     },
//     post:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref: post
//     }
// },{timestamps:true});

// const Comment=mongoose.model('Comment',CommentSchema);
// module.exports=Comment;