const express = require('express');
const cors = require('cors');
const app = express();
const fs = require('fs');
const troubleshootRouter = require('./routes/troubleshootRouter');

require('dotenv').config();

const PORT = process.env.PORT || 5050;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/troubleshoot', troubleshootRouter);

app.get("/", (req, res) => {
    console.log("Made it to the server!")
    res.send("Welcome to the troubleshoot server!")
});

app.listen(PORT, () => {
    console.log(`Express app running on port: ${PORT}`)
}); 