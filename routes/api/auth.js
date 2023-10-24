const express = require("express");
const router = express.Router();
const ctrlAuth = require("../../controllers/auth");
const validate = require("../../middleware/validationMiddleware");
const registerSchema = require("../../schemas/user");

router.post("/register", validate(registerSchema), ctrlAuth.register);

module.exports = router;
