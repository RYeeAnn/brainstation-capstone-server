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

//Route to get all comments
router.get("/comments", (req, res) => {
  knex("comments")
  .select("name", "comment", "created_at")
  .orderBy("created_at", "desc")
  .then((comments) => {
    res.json(comments);
  })
  .catch((error) => {
    console.error("Error retrieving comments:", error);
    res.status(500).json({ error: "Internal server error "});
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

// Add a new route to handle user comments
router.post("/comments", (req, res) => {
  const { name, comment } = req.body;

  // Insert the comment into the database
  knex("comments")
    .insert({ name, comment })
    .then(() => {
      res.status(200).json({ message: "Comment submitted successfully!" });
    })
    .catch((error) => {
      console.error("Error submitting comment:", error);
      res.status(500).json({ error: "Internal server error" });
    });
});

module.exports = router;
