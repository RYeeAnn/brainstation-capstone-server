const express = require('express');
const cors = require('cors');
const app = express();
const fs = require('fs');
const troubleshootRouter = require('./routes/troubleshootRouter');
const AWS = require('aws-sdk');

require('dotenv').config();

const PORT = process.env.PORT || 5050;

AWS.config.update({
    region: 'us-east-1', // Your AWS region
    accessKeyId: process.env.AWS_ACCESS_KEY_ID, // Load from environment variable
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, // Load from environment variable
  });

const lexruntime = new AWS.LexRuntimeV2(); // Make sure to use LexRuntimeV2 for Amazon Lex V2

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'))
app.use('/troubleshootPage', troubleshootRouter);



app.post('/', (req, res) => {
    const params = {
      botId: "IBSYCU6CU5", // Your bot ID
      botAliasId: "TSTALIASID", // The bot alias ID from the AWS CLI output
      localeId: "en_US", // Your locale ID
      sessionId: req.body.userId, // Unique session identifier for the conversation
      text: req.body.inputText, // User input text
    };
  
    lexruntime.recognizeText(params, function (err, data) {
      if (err) {
        console.error('AWS Lex Error:', err);
        res.status(500).json({
          message: 'Error processing your message',
          error: err.message,
        });
      } else {
        // Check if Lex returned a message
        if (data.messages && data.messages.length > 0) {
          res.json({ message: data.messages[0].content });
        } else {
          // Handle no message response
          res.json({ message: "Sorry, I didn't understand that." });
        }
      }
    });
});

app.get("/", (req, res) => {
    console.log("Made it to the server!")
    res.send("Welcome to the troubleshoot server!")
});

app.listen(PORT, () => {
    console.log(`Express app running on port: ${PORT}`)
}); 