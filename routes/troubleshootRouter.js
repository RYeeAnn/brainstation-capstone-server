const express = require("express");
const router = express.Router();
const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig.development);

// Route to get all issues
router.get("/issues", (req, res) => {
  knex("issues")
    .select("id", "problem")
    .then((issues) => {
      res.json(issues);
    })
    .catch((error) => {
      console.error("Error retrieving issues:", error);
      res.status(500).json({ error: "Internal server error" });
    });
});

// Function to retrieve solutions based on a user's question
function getResponseForQuestion(question) {
  return knex('issues')
    .select('id')
    .where('problem', '=', question)
    .then(issues => {
      const issueIds = issues.map(issue => issue.id);
      return knex('solutions')
        .whereIn('issue_id', issueIds)
        .select('solution', 'instructions', 'tools_required');
    })
    .catch(error => {
      console.error('Error fetching solutions:', error);
      throw error;
    });
}

// Route to handle user questions and fetch solutions
router.post("/", (req, res) => {
  const { question } = req.body;

  getResponseForQuestion(question)
    .then((solutions) => {
      res.json(solutions);
    })
    .catch((error) => {
      console.error("Error handling user question:", error);
      res.status(500).json({ error: "Internal server error" });
    });
});

module.exports = router;
