// const crypto = require("crypto");
const bcrypt = require("bcrypt");

// TODO
const validatePassword = async (passwordInput, passwordDB) => {
  const validPassword = await bcrypt.compare(passwordInput, passwordDB);

  if (validPassword) {
    return true;
  } else {
    return false;
  }
};

const genPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

module.exports = { validatePassword, genPassword };
