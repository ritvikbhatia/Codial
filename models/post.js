const mongoose=require('mongoose');
const user=require('./users')
const comments=require('./comments')
const postSchema= new mongoose.Schema({
    content:{
        type:String,
        required:true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:user
    }
    // comments:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:comments
    // }
},{timestamps:true});

const Post=mongoose.model('Post',postSchema);
module.exports=Post;