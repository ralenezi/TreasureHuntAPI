const express = require("express");
const router = express.Router();
const passport = require("passport");

const { signup, signin } = require("./controllers");

router.post("/signup", signup);

router.post(
  "/signin",
  passport.authenticate("local", { session: false }),
  signin
);
module.exports = router;
