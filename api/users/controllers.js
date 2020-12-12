const { User } = require("../../db/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET, JWT_EXPIRATION_MS } = require("../../config/keys");

exports.signup = async (req, res, next) => {
  const { password } = req.body;
  const saltRounds = 10;
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    req.body.password = hashedPassword;
    const newUser = await User.create(req.body);

    const payload = {
      //id:req.user.id,
      id: newUser.id,
      username: newUser.username,
      massage: "wooow",
      exp: Date.now() + parseInt(JWT_EXPIRATION_MS),
    };
    const token = jwt.sign(JSON.stringify(payload), JWT_SECRET);

    res.status(201).json({ token });
  } catch (error) {
    res.json({ message: "here is an error at controller.js", error });
  }
};

exports.signin = (req, res) => {
  const user = req.body;
  const payload = {
    //id:req.user.id,
    id: user.id,
    username: user.username,
    massage: "wooow",
    exp: Date.now() + parseInt(JWT_EXPIRATION_MS),
  };
  const token = jwt.sign(JSON.stringify(payload), JWT_SECRET);

  res.json({ token });
};

// exports.signin = (req, res) => {
//   console.log("hii");
// };
