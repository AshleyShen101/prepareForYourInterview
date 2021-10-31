let express = require("express");
let router = express.Router();

const myDB = require("../db/myDB.js");

router.post("/create", async (req, res) => {
  if (!req.session.user) {
    res.redirect("/index.html");
    res.status(401).send({ work: false });
  }
  const post = req.body;
  await myDB.createPost(post);
  res.redirect("/viewRecipe.html");
});

router.get("/getPosts", async (req, res) => {
  if (!req.session.user) {
    return res.status(401).send({ work : false });
  }
  res.send({ recipes: await myDB.getPosts(), work : true });
});

router.get("/check", async (req, res) => {
  if (!req.session.user) {
    console.log("failed");
    return res.status(401).send({ work : false });
  }
  res.send({ work : true });
});

module.exports = router;