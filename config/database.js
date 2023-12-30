const mongoose = require("mongoose");

const { UserSchema } = require("../models/UserModel");

require("dotenv").config();

/**
 * -------------- DATABASE ----------------
 */

/**
 * Connect to MongoDB Server using the connection string in the `.env` file.  To implement this, place the following
 * string into the `.env` file
 *
 * DB_STRING=mongodb://<user>:<password>@localhost:27017/database_name
 */

const conn = process.env.DB_STRING;

const connection = mongoose.createConnection(conn, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// add the User model to the connection so the application can use it with the right headers
const User = connection.model("User", UserSchema);

// Expose the connection
module.exports = connection;
