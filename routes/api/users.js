const express = require("express");
const router = express.Router();
const ctrlAuth = require("../../controllers/auth");
const validate = require("../../middleware/validationMiddleware");
const authSchema = require("../../schemas/user");
const { authorization } = require("../../middleware/authMiddleware");
const getCurrentUser = require("../../controllers/users/getCurrentUser");

router.post("/register", validate(authSchema), ctrlAuth.register);
router.post("/login", validate(authSchema), ctrlAuth.login);
router.post("/logout", authorization, ctrlAuth.logout);
router.get("/current", authorization, getCurrentUser);

module.exports = router;
