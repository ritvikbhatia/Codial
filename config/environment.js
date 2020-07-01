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
    jwtkey:'codeial'
}

const production={
    name:'production'
}

module.exports=development;