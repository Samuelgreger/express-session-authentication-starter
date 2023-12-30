const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const connection = require("./database");
const { validatePassword } = require("../lib/passwordUtils");
const User = connection.models.User;

const customFields = {
  usernameField: "username",
  passwordField: "password",
};

const verifyCallback = (username, password, done) => {
  console.log("8:", username);
  console.log("9:", password);
  User.findOne({ username: username })
    .then((user) => {
      if (!user) {
        return done(null, false);
      }
      console.log("1:", user);
      const isValid = validatePassword(password, user.password);
      if (isValid) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    })
    .catch((err) => {
      console.log(err);
      done(err);
    });
};

const strategy = new LocalStrategy(customFields, verifyCallback);

passport.use(strategy);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((userId, done) => {
  User.findById(userId)
    .then((user) => {
      done(null, user);
    })
    .catch((err) => done(err));
});
