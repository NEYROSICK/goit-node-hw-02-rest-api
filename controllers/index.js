const listContacts = require("./contact/listContacts");
const getContactById = require("./contact/getContactById");
const addContact = require("./contact/addContact");
const removeContact = require("./contact/removeContact");
const updateContact = require("./contact/updateContact");
const updateStatusContact = require("./contact/updateStatusContact");

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
  updateStatusContact,
};
