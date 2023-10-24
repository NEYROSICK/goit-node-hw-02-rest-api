const express = require("express");
const router = express.Router();
const ctrlAuth = require("../../controllers/auth");
const validate = require("../../middleware/validationMiddleware");
const authSchema = require("../../schemas/user");

router.post("/register", validate(authSchema), ctrlAuth.register);
router.post("/login", validate(authSchema), ctrlAuth.login);

module.exports = router;
