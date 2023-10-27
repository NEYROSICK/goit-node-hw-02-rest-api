const getCurrentUser = require("./getCurrentUser");
const updateSubscription = require("./updateSubscription");
const wrapper = require("../../helpers/controllerWrapper");

module.exports = {
  getCurrentUser: wrapper(getCurrentUser),
  updateSubscription: wrapper(updateSubscription),
};
