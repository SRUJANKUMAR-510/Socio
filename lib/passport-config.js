// lib/passport-config.js

const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
const InstagramStrategy = require('passport-instagram').Strategy;
const User = require('../models/User'); // Assume you have a User model

passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: `${process.env.BASE_URL}/api/auth/facebook/callback`
},
function(accessToken, refreshToken, profile, done) {
  User.findOrCreate({ facebookId: profile.id }, function (err, user) {
    return done(err, user);
  });
}
));

passport.use(new TwitterStrategy({
  consumerKey: process.env.TWITTER_CONSUMER_KEY,
  consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
  callbackURL: `${process.env.BASE_URL}/api/auth/twitter/callback`
},
function(token, tokenSecret, profile, done) {
  User.findOrCreate({ twitterId: profile.id }, function (err, user) {
    return done(err, user);
  });
}
));

passport.use(new InstagramStrategy({
  clientID: process.env.INSTAGRAM_CLIENT_ID,
  clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
  callbackURL: `${process.env.BASE_URL}/api/auth/instagram/callback`
},
function(accessToken, refreshToken, profile, done) {
  User.findOrCreate({ instagramId: profile.id }, function (err, user) {
    return done(err, user);
  });
}
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
