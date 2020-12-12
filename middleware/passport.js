const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

exports.localStrategy = new LocalStrategy(async (username, password, done) => {
  try {
    const user = await User.findOne({
      where: { username: username },
    });
    const userAuthentication = user
      ? await bcrypt.compare(password, user.password)
      : false;
    if (userAuthentication) return done(null, user);
    else return done(null, false);
  } catch (error) {
    done(error);
  }
});
