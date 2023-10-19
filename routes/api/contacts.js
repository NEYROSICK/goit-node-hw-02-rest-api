const express = require("express");
const contacts = require("../../models/contacts");
const requestError = require("../../helpers/requestError");
const validate = require("../../middleware/validationMiddleware");
const addContactSchema = require("../../schemas/addContact");
const updateContactSchema = require("../../schemas/updateContact");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const result = await contacts.listContacts();
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});

router.get("/:contactId", async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contacts.getContactById(contactId);
    if (!result) {
      throw requestError(404);
    }
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});

router.post("/", validate(addContactSchema), async (req, res, next) => {
  try {
    const { name, email, phone } = req.body;
    const result = await contacts.addContact(name, email, phone);
    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

router.delete("/:contactId", async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contacts.removeContact(contactId);
    if (!result) {
      throw requestError(404);
    }
    return res.status(200).json({ message: "Contact removed!" });
  } catch (error) {
    next(error);
  }
});

router.put(
  "/:contactId",
  validate(updateContactSchema),
  async (req, res, next) => {
    try {
      const { contactId } = req.params;
      if (!Object.keys(req.body).length) {
        throw requestError(400, "Missing fields");
      }
      const { name, email, phone } = req.body;
      const result = await contacts.updateContact(
        contactId,
        name,
        email,
        phone
      );

      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
