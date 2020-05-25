const express=require('express');
const app=express();
//use express router
app.use('/',require("./routes"))
app.set('view engine','ejs');
app.set('views',"./views");

const port=8000;
app.listen(port,function(err){
    if(err)
        console.log(`Error: ${err}`);
    console.log("success");
})
