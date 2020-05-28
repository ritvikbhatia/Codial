const mongoose=require('mongoose');
const user=require('./users')
const postSchema= new mongoose.Schema({
    content:{
        type:String,
        required:true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:user
    }
},{timestamps:true});

const Post=mongoose.model('Post',postSchema);
module.exports=Post;