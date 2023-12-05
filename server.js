const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const AWS = require('aws-sdk');

require('dotenv').config();

const PORT = process.env.PORT || 5050;

AWS.config.update({
  region: 'us-east-1', // Your AWS region
  accessKeyId: process.env.AWS_ACCESS_KEY_ID, // Load from environment variable
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, // Load from environment variable
});

const lexRuntimeEndpoint = 'https://runtime.lex.us-east-1.amazonaws.com'; // Change the region accordingly
const lexruntime = new AWS.LexRuntimeV2();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.post('/lex', (req, res) => {
  const params = {
    botId: "IBSYCU6CU5",
    botAliasId: "TSTALIASID",
    localeId: "en_US",
    sessionId: req.body.userId,
    text: req.body.inputText,
  };

  const lexRequestURL = `${lexRuntimeEndpoint}/bot/${params.botId}/alias/${params.botAliasId}/user/${params.sessionId}/text`;

  axios.post(lexRequestURL, { inputText: params.text })
    .then(response => {
      res.json({ message: response.data.message });
    })
    .catch(error => {
      console.error('AWS Lex Error:', error);
      res.status(500).json({
        message: 'Error processing your message',
        error: error.message,
      });
    });
});

app.get("/", (req, res) => {
  console.log("Made it to the server!")
  res.send("Welcome to the troubleshoot server!")
});

app.listen(PORT, () => {
  console.log(`Express app running on port: ${PORT}`);
});
