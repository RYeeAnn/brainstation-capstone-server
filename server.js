const express = require('express');
const cors = require('cors');
const app = express();
const troubleshootRouter = require('./routes/troubleshootRouter');
const AWS = require('aws-sdk');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session');

require('dotenv').config();

const PORT = process.env.PORT || 5050;

AWS.config.update({
  region: 'us-east-1', // Your AWS region
  accessKeyId: process.env.AWS_ACCESS_KEY_ID, // Load from environment variable
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, // Load from environment variable
});

const lexruntime = new AWS.LexRuntimeV2();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Session middleware setup
app.use(
  session({
    secret: process.env.SESSION_SECRET, // Use a secure, random string as your session secret
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Passport session serialization and deserialization
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

// Google OAuth strategy setup
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "https://cruisin-df8cc0f5b5d6.herokuapp.com/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      // Here, you would typically create or update a user in your database.
      return done(null, profile);
    }
  )
);

// Routes for authentication
app.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  function (req, res) {
    // Successful authentication, redirect to the home page or wherever you need.
    res.redirect('/');
  }
);

// Lex
app.post('/lex', (req, res) => {
  const params = {
    botId: 'IBSYCU6CU5',
    botAliasId: 'TSTALIASID',
    localeId: 'en_US',
    sessionId: req.body.userId,
    text: req.body.inputText,
  };

  const lexRequestParams = {
    botId: params.botId,
    botAliasId: params.botAliasId,
    localeId: params.localeId,
    sessionId: params.sessionId,
    text: params.text,
  };

  lexruntime.recognizeText(lexRequestParams, (err, data) => {
    if (err) {
      console.error('AWS Lex Error:', err);
      res.status(500).json({
        message: 'Error processing your message',
        error: err.message,
      });
    } else {
      if (data.messages && data.messages.length > 0) {
        res.json({ message: data.messages[0].content });
      } else {
        res.json({ message: "Sorry, I didn't understand that." });
      }
    }
  });
});

app.get('/', (req, res) => {
  console.log('Made it to the server!');
  res.send('Welcome to the troubleshoot server!');
});

app.listen(PORT, () => {
  console.log(`Express app running on port: ${PORT}`);
});
