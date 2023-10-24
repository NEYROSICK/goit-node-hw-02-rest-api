const User = require("../../models/user");
// const requestError = require("../../helpers/requestError");
const bcrypt = require("bcrypt");

const register = async (req, res, next) => {
  console.log(req.body.password);
  // if (!Object.keys(req.body).length) {
  //   throw requestError(400, "Missing fields");
  // }
  req.body.password = await bcrypt.hash(req.body.password, 10);

  const user = await User.create(req.body);
  console.log(user);

  return res.status(201).json(user);
};

module.exports = register;
