const express = require("express");
const fs = require("fs");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("reached troubleshoot");

  const troubleshootJSON = fs.readFileSync("./data/troubleshoot.json");

  res.send(troubleshootJSON);
});

module.exports = router;
