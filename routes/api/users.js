const express = require("express");
const router = express.Router();
const ctrlAuth = require("../../controllers/auth");
const validate = require("../../middleware/validationMiddleware");
const user = require("../../schemas/user");
const { authorization } = require("../../middleware/authMiddleware");
const ctrlUser = require("../../controllers/user");

router.patch(
  "/",
  validate(user.subSchema),
  authorization,
  ctrlUser.updateSubscription
);
router.post("/register", validate(user.authSchema), ctrlAuth.register);
router.post("/login", validate(user.authSchema), ctrlAuth.login);
router.post("/logout", authorization, ctrlAuth.logout);
router.get("/current", authorization, ctrlUser.getCurrentUser);

module.exports = router;
