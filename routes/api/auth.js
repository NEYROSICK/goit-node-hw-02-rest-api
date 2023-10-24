const express = require("express");
const router = express.Router();
const wrapper = require("../../helpers/controllerWrapper");
const ctrl = require("../../controllers/auth");

router.get("/register", wrapper(ctrl.register));
