const Contact = require("../../models/contact");
const requestError = require("../../helpers/requestError");

const listContacts = async (req, res, next) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 0;
  const skip = Number(page) <= 1 ? 0 : (page - 1) * limit;
  const contactCount = await Contact.countDocuments();

  if (skip >= contactCount) {
    throw requestError(400, "Out of range request");
  }

  console.log(skip);
  const result = await Contact.find({}, null, { skip }).limit(limit);
  return res.status(200).json(result);
};

module.exports = listContacts;
