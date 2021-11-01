let express = require("express");
let router = express.Router();

const myDB = require("../db/myDB.js");

router.get("/regi", (req, res) => {
  res.redirect("/register.html");
  return;
});

router.post("/register", async (req, res) => {
  const user = req.body;
  const existUser = await myDB.searchUser({ username: user.username });
  if (existUser && existUser.length > 0) {
    return res.send({ work: false });
  }
  const newUser = await myDB.creatUser(user);
  if (newUser) {
    req.session.user = user;
    return res.send({ work: true });
  }
});

router.post("/login", async (req, res) => {
  const user = req.body;
  const existUser = await myDB.searchUser({ username: user.username });
  if (existUser && existUser.length > 0) {
    req.session.user = user;
    return res.send({ work: true });
  }
  return res.send({ work: false });
});

router.get("/logout", async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    }
    res.redirect("/index.html");
  });
});

router.post("/create", async (req, res) => {
  if (!req.session.user) {
    // alert("Please sign in to share your experience.");
    res.redirect("/index.html");
    console.log("guest");
    return res.send({ work: false });
  }
  const post = req.body;
  if (!post || post.length == 0) {
    // alert("Can not create empty post!");
    return res.redirect("/index.html");
  }
  await myDB.createPost(post);
  return res.send({ work: true });
  // return res.redirect("/viewRecipe.html");
});

router.get("/getPosts", async (req, res) => {
  if (!req.session.user) {
    return res.status(401).send({ work: false });
  }
  res.send({ posts: await myDB.getPosts(), work: true });
});

router.get("/check", async (req, res) => {
  if (!req.session.user) {
    return res.status(401).send({ work: false });
  }
  res.send({ work: true });
});

module.exports = router;
