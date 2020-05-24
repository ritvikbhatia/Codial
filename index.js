const express=require('express');
const app=express();
app.use('/',require("./routes"))
const port=8000;
app.listen(port,function(err){
    if(err)
        console.log(`Error: ${err}`);
    console.log("success");
})
