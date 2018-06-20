const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');
const app = express();
//https://accounts.google.com/o/oauth2/v2/auth?
// response_type=code&
// redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fauth%2Fgoogle%2Fcallback&

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback'
        },(accessToken)=>{
            console.log(accessToken);
        })
);

app.get(
    '/auth/google',
    passport.authenticate('google',{
        scope: ['profile', 'email']
    })
);

const PORT = process.env.PORT || 5000;
app.listen(PORT);