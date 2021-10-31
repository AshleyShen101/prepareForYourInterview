let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");
const session = require("express-session");

let indexRouter = require("./routes/index");
let usersRouter = require("./routes/users");
let postRouter = require("./routes/index");

let app = express();

app.use(
  session({
    secret: "interview",
    resave: false,
    saveUninitialized: true,
    cookie:
      ("name", "value", { maxAge: 30 * 24 * 60 * 60 * 1000, secure: false }),
  })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/post", postRouter);



module.exports = app;