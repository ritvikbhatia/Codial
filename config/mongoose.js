const mongoose =require('mongoose');
mongoose.connect("mongodb://localhost/codial_development");
const db =mongoose.connection;

db.on('error',console.error.bind(console.log("error connecting db")));
db.once('open',function(){
    console.log("successfully connected to db");
    module.exports=db;
})