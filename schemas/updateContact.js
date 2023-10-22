const joi = require("joi");

const updateContactSchema = joi.object({
  name: joi.string(),
  email: joi.string(),
  phone: joi.string(),
  favorite: joi.boolean(),
});

module.exports = updateContactSchema;
