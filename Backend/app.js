var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var usersRouter = require("./routes/users");
var questionsRouter = require("./routes/questions");
let { authorize } = require("./utils/auth");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/users", usersRouter);
// all the routes given in the filmRouter shall be secure : call the authorize middleware
app.use("/api/questions", authorize, questionRouter);


module.exports = app;
