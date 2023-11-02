const joi = require("joi");

const authSchema = joi.object({
  email: joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  password: joi
    .string()
    .pattern(/^[a-zA-Z0-9]{3,30}$/)
    .required(),
});

const subSchema = joi.object({
  subscription: joi.string().valid("starter", "pro", "business").required(),
});

module.exports = { authSchema, subSchema };
