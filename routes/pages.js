let express = require("express");
let router = express.Router();

router.get("/", (req, res) => {
  res.render("Home.ejs");
});

router.get("/dashboard", (req, res) => {
  res.render("Dashboard.ejs");
});

module.exports = router;
