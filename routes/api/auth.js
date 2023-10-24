const express = require("express");
const router = express.Router();
const ctrlAuth = require("../../controllers/auth");
const wrapper = require("../../helpers/controllerWrapper");

router.post("/register", wrapper(ctrlAuth.register));

module.exports = router;
