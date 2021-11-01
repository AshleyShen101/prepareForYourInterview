let express = require("express");
let router = express.Router();
const Article = require("../db/article");

router.post("/:id", async (req, res) => {
  await Article.findByIdAndDelete(req.params.id);
  res.redirect("/posts");
});

module.exports = router;