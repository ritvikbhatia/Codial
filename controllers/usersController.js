module.exports.profile=function(req,res){
    console.log(" users controller loaded");
    return res.end("User Profile");
    
}

module.exports.dp=function(req,res){
    console.log(" users controller loaded");
    return res.end("Display picture");
    
}