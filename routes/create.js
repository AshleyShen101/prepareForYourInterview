let express = require("express");
let router = express.Router();
const Article = require("../db/article");

router.get("/", function (req, res) {
  res.render("create", {});
});

router.post("/", async (req, res, next) => {
    req.article = new Article();
    next();
  }, saveArticleAndRedirect("create"));

function saveArticleAndRedirect(path) {
    return async (req, res) => {
    let article = req.article;
    article.title = req.body.title;
    article.content = req.body.content;
    try {
        article = await article.save();
        res.redirect("/posts");
    } catch (e) {
        res.render(`posts/${path}`, { article: article });
    }
    };
}

module.exports = router;