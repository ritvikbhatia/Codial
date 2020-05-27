const User=require('../models/users');

module.exports.profile=function(req,res){
    console.log(" profile controller loaded");
    User.findById(req.cookies.userID,function(err,user){
        if(user)
        {
            console.log(req.cookies.userID);
            return res.render("User_profile.ejs",{
                name:user.name,
                email:user.email
            })
        }
    return res.redirect('/users/signin');
    });
    
}

module.exports.dp=function(req,res){
    console.log(" users controller loaded");
    return res.end("Display picture");
    
}
module.exports.signup=function(req,res){
    console.log(" sign up controller loaded");
    return res.render('signup.ejs',{
        'title':'create account'
    })
    
};
module.exports.signin=function(req,res){
    console.log(" sign in controller loaded");
    return res.render('signin.ejs',{
        'title':'Login'
    })
};

module.exports.create=function(req,res){
    console.log('create');
    
    if(req.body.password==req.body.ConfirmPassword)
    {
        User.findOne({email:req.body.email},function(err,user){
            if(err) console.log(err);
            
            if(user)
                return res.redirect('back');
            else{
                User.create(req.body,function(err,user){
                   if(err)
                        console.log(err);
                   return res.redirect('signin');
                });
                
                }
        })
            
        
    }
    else
        res.redirect('back');
    };
module.exports.createSession=function(req,res){
        User.findOne({email:req.body.email},function(err,user){
            if(err) console.log("error in finding");
            if(user)
            {
                if(user.password==req.body.password)
                {
                    res.cookie('userID',user.id);
                    res.redirect('/users/profile');
                }
                else{
                    return res.redirect('back');
                }
            }
            else
                return res.redirect('back');
            
        })
    };