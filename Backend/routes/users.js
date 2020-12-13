var express = require("express");
var router = express.Router();
var User = require("../models/User.js");
let { authorize, signAsynchronous } = require("../utils/auth");
const jwt = require("jsonwebtoken");
const jwtSecret = "jkjJ1235Ohno!";
const LIFETIME_JWT = 24 * 60 * 60 * 1000; // 10;// in seconds // 24 * 60 * 60 * 1000 = 24h

/* GET user list : secure the route with JWT authorization */
router.get("/", authorize, function (req, res, next) {
  return res.json(User.list);
});

/* POST user data for authentication */
router.post("/login", function (req, res, next) {
  let user = new User(req.body.email, req.body.email, req.body.password, 0, 0, 0);
  console.log("POST users/login:", User.list);
  user.checkCredentials(req.body.email, req.body.password).then((match) => {
    if (match) {
      jwt.sign(
        { username: user.username },
        jwtSecret,
        { expiresIn: LIFETIME_JWT },
        (err, token) => {
          if (err) {
            console.error("POST users/ :", err);
            return res.status(500).send(err.message);
          }
          console.log("POST users/ token:", token);
          user = User.getUserFromList(user.username);
          return res.json({ username: user.username, token: token, score1: user.score1, score2: user.score2, score3: user.score3});
        }
      );
    } else {
      console.log("POST users/login Error:", "Unauthentified");
      return res.status(401).send("bad email/password");
    }
  });
});

/* POST a new user */
router.post("/", function (req, res, next) {
  console.log("POST users/", User.list);
  console.log("email:", req.body.email);
  if (User.isUser(req.body.email)) return res.status(409).end();
  let newUser = new User(req.body.email, req.body.email, req.body.password,0 , 0, 0);
  newUser.save().then(() => {
    console.log("afterRegisterOp:", User.list);
    jwt.sign(
      { username: newUser.username },
      jwtSecret,
      { expiresIn: LIFETIME_JWT },
      (err, token) => {
        if (err) {
          console.error("POST users/ :", err);
          return res.status(500).send(err.message);
        }
        console.log("POST users/ token:", token);
        return res.json({ username: user.username, token: token, score1: user.score1, score2: user.score2, score3: user.score3});
      }
    );
    /* Example on how to create and use your own asynchronous function (signAsynchronous())
    signAsynchronous(newUser, (err, token) => {
      if (err) {
        console.error("POST users/ :", err);
        return res.status(500).send(err.message);
      }
      console.log("POST users/ token:", token);
      return res.json({ username: req.body.email, token });
    });
    */
  });
});

router.post("/scores", function(req, res){
  console.log("arrive ici");
  console.log(req.body.username, req.body.score1, req.body.score2, req.body.score3);
  User.updateScoreUser(req.body.username, req.body.score1, req.body.score2, req.body.score3);
  let user = User.getUserFromList(req.body.username);
  return res.json({ username: user.username,score1: user.score1, score2: user.score2, score3: user.score3})
});

/* GET user object from username */
router.get("/:username", function (req, res, next) {
  console.log("GET users/:username", req.params.username);
  const userFound = User.getUserFromList(req.params.username);
  if (userFound) {
    return res.json(userFound);
  } else {
    return res.status(404).send("ressource not found");
  }
});

module.exports = router;
