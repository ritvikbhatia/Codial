const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
const User=require('../models/users');

passport.use(new LocalStrategy({
    usernameField:'email'
},
    function(email, password, done) {
      User.findOne({ email: email }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (!user.password==password) { return done(null, false); }
        return done(null, user);
      });
    }
  ));

  //serializing the user to decide which key is to be put as cookie
    passport.serializeUser(function(user,done)
    {
        done(null,user.id);
    })


  //deserializing the user from the key in the cookies
  passport.deserializeUser(function(id,done)
  {
      User.findById(id,function(err,user)
      {
          if(err)
          {
                console.log("error in passport auth");
                return done(err);
          }   
          return done(null,user);
      })
  })

passport.checkAuthentication=function(req,res,next){
    if(req.isAuthenticated())
        return next();
    return res.redirect('/users/signin');
}

passport.setAuthenticatedUser=function(req,res,next){
    if(req.isAuthenticated())
    {
        res.locals.user=req.user;
    }    
    next();
}
passport.checkAuthenticationsign=function(req,res,next){
    if(req.isAuthenticated())
        return res.redirect('/');
    next();
    }



  module.exports=passport;