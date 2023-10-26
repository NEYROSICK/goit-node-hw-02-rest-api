const wrapper = require("../../helpers/controllerWrapper");
const login = require("./login");
const logout = require("./logout");
const register = require("./registration");

module.exports = {
  register: wrapper(register),
  login: wrapper(login),
  logout: wrapper(logout),
};
