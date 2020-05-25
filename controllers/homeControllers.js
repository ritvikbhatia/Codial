module.exports.home=function(req,res){
    console.log("controller loaded");
    return res.render('home.ejs',{
        'title':'home'
    })
    
};