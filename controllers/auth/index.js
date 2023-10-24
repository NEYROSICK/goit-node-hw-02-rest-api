// const wrapper = require("../../helpers/controllerWrapper");
const login = require("./login");
const register = require("./registration");

// module.exports = { login: wrapper(login), register: wrapper(register) };
module.exports = { login, register };
