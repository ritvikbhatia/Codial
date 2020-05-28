const express=require('express');
const app=express();
const cookieParser=require('cookie-parser');
const port=8000;
const expressLayouts=require('express-ejs-layouts');
const db=require('./config/mongoose');
const session =require('express-session');
const passport=require('passport');
const passportLocal=require('./config/passport-local-strategy');
const mongoStore=require('connect-mongo')(session);

app.use(cookieParser());
app.use(express.urlencoded());
app.use(express.static('./assets'));
app.use(expressLayouts);

//extract styles and scripts from the subpages to layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

app.set('view engine','ejs');
app.set('views',"./views");

app.use(session({
    name:'codial',
    secret:'blahsomething',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(60*10008100)
    },
    store:new mongoStore(
        {
        mongooseConnection:db,
        autoRemove:'disabled'
    },function(err){
        console.log("mongo store success");
        
    }), 
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser)

//use express router
app.use('/',require("./routes"))


app.listen(port,function(err){
    if(err)
        console.log(`Error: ${err}`);
    console.log("success");
})
