const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  //   email: {
  //     type: String,
  //     required: true,
  //     max: 255,
  //     min: 6,
  //   },
  password: {
    type: String,
    required: true,
    max: 1024,
  },
  /* date: {
    type: Date,
    default: Date.now,
  }, */
});

module.exports = { UserSchema };
