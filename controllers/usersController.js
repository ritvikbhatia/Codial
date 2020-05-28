const User=require('../models/users');

module.exports.profile=function(req,res){
    console.log(" users controller loaded");
    return res.render('users_profile.ejs');
    
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
        res.redirect('/');
    }
module.exports.destroySession=function(req,res){
    req.logout();    
    res.redirect('/');
    }