const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const troubleshootRouter = require('./routes/troubleshootRouter');
const AWS = require('aws-sdk');

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
app.use('/troubleshootPage', troubleshootRouter);

app.post('/lex', (req, res) => {
  const params = {
    botId: "IBSYCU6CU5",
    botAliasId: "TSTALIASID",
    localeId: "en_US",
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

app.get("/", (req, res) => {
  console.log("Made it to the server!");
  res.send("Welcome to the troubleshoot server!");
});

app.listen(PORT, () => {
  console.log(`Express app running on port: ${PORT}`);
});
