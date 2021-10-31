let express = require("express");
let router = express.Router();

const myDB = require("../db/myDB.js");

router.get("/regi", (req, res) => {
  res.redirect("/register.html");
  return;
});

router.post("/register", async (req, res) => {
  const user = req.body;
  console.log(user.username);
  const existUser = await myDB.searchUser({username: user.username});
  if (existUser && existUser.length > 0) {
    return res.send({work : false});
  }
  const newUser = await myDB.creatUser(user);
  return res.send({work : true});
});

router.post("/login", async (req, res) => {
  const user = req.body;
  const existUser = await myDB.searchUser({username: user.username});
  if (existUser && existUser.length > 0) {
    // req.session.user = user;
    
    return res.send({work : true});;
  }
  return res.send({work : false});
});

module.exports = router;
