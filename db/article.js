const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
  },
  { collection: "posts" }
);

module.exports = mongoose.model("Article", articleSchema);

