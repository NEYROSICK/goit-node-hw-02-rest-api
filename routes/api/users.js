const express = require("express");
const router = express.Router();
const ctrlAuth = require("../../controllers/auth");
const validate = require("../../middleware/validationMiddleware");
const authSchema = require("../../schemas/user");
const { authorization } = require("../../middleware/authMiddleware");

router.post("/register", validate(authSchema), ctrlAuth.register);
router.post("/login", validate(authSchema), ctrlAuth.login);
router.post("/logout", authorization, ctrlAuth.logout);

module.exports = router;
