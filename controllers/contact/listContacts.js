const Contact = require("../../models/contact");

const listContacts = async (req, res, next) => {
  const result = await Contact.find();
  return res.status(200).json(result);
};

module.exports = listContacts;
