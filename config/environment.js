const fs = require('fs');
const rfs = require('rotating-file-stream');
const path = require('path');


const logDirectory = path.join(__dirname, '../production_logs');
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

const accessLogStream = rfs.createStream('access.log', {
    interval: '1d',
    path: logDirectory
});

const development={
    name:'development',
    asset_path:'/assets',
    session_cookie:'blahsomething',
    db:'codeial_development',
    smtp:{
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'alchemy.cn18',
            pass: 'codingninjas'
        }
    },
    gclientID: "313233209747-dnqmail3j800a2jvsuckqhohodhs7i63.apps.googleusercontent.com",
    gclientSecret: "0FXb5EBWa4xRfJ8jR-1HKMd2",
    gcallbackURL: "http://localhost:8000/users/auth/google/callback",
    jwtkey:'codeial',
    morgan: {
        mode: 'dev',
        options: {stream: accessLogStream}
    }
}

const production={
    name:'production',
    asset_path: '/assets',
    session_cookie:process.env.codial_session_cookie,
    db:process.env.codial_db,
    smtp:{
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'alchemy.cn18',
            pass: 'codingninjas'
        }
    },
    gclientID: "313233209747-dnqmail3j800a2jvsuckqhohodhs7i63.apps.googleusercontent.com",
    gclientSecret: "0FXb5EBWa4xRfJ8jR-1HKMd2",
    gcallbackURL: "http://codial.com/users/auth/google/callback",
    jwtkey:'lkhXBtaxwKsZoq2UzCsdvjwdbjbKw7f4',
    morgan: {
        mode: 'combined',
        options: {stream: accessLogStream}
    }
}
console.log('********',  process.env.codial_session_cookie);

module.exports=production;