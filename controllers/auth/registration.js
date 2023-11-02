const User = require("../../models/user");
const bcrypt = require("bcrypt");
const gravatar = require("gravatar");

const register = async (req, res, next) => {
  req.body.password = await bcrypt.hash(req.body.password, 10);
  req.body.avatarURL = gravatar.url(req.body.email);

  const user = await User.create(req.body);
  const response = {
    user: { email: user.email, subscription: user.subscription },
  };
  return res.status(201).json(response);
};

module.exports = register;
