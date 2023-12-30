// const crypto = require("crypto");
const bcrypt = require("bcrypt");

// TODO
const validatePassword = async (password) => {
  console.log("2:", user.password);

  const validPassword = await bcrypt.compare(password, user.password);

  console.log("3:", validPassword);

  // TODO
  // if (!validPassword) {
  //     return res.status(400).json({
  //       error: "Username or password is incorrect.",
  //     });
  //   }

  if (validPassword) {
    return true;
  } else {
    return false;
  }
};

const genPassword = async (password) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  return hashedPassword;
  /* {
    // salt: salt,
    // hash: genHash,
    hashedPassword: hashedPassword,
  }; */
};

module.exports = { validatePassword, genPassword };
