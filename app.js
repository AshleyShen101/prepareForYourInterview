let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");
const session = require("express-session");
const mongoose = require("mongoose");

let indexRouter = require("./routes/index");
let usersRouter = require("./routes/users");
let postRouter = require("./routes/posts");
let createRouter = require("./routes/create");

let app = express();
app.set("view engine", "ejs");

mongoose.connect("mongodb+srv://AshleyShen:Asyy*1234@cluster0.perfc.mongodb.net/Project0?retryWrites=true&w=majority");

app.use(
  session({
    secret: "interview",
    resave: false,
    saveUninitialized: true,
    cookie:
      ("name", "value", { maxAge: 30 * 24 * 60 * 60 * 1000, secure: false }),
  })
);

app.set("view engine", "ejs");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/posts", postRouter);
app.use("/create", createRouter);

module.exports = app;
