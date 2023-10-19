const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.resolve(__dirname, "./contacts.json");

const updateContacts = async (contacts) => {
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
};

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const result = contacts.find((contact) => contact.id === contactId);
  return result;
};

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const removedContact = contacts.find((contact) => contact.id === contactId);
  if (!removedContact) return null;
  const newContacts = contacts.filter((contact) => contact.id !== contactId);
  await fs.writeFile(contactsPath, JSON.stringify(newContacts, null, 2));
  return removedContact;
};

const addContact = async (name, email, phone) => {
  const contacts = await listContacts();

  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };

  contacts.push(newContact);
  await updateContacts(contacts);

  return newContact;
};

const updateContact = async (contactId, name, email, phone) => {
  const contacts = await listContacts();
  const index = contacts.findIndex((el) => el.id === contactId);
  if (index === -1) return null;
  const updatedContact = (contacts[index] = {
    id: contactId,
    name: name ? name : contacts[index].name,
    email: email ? email : contacts[index].email,
    phone: phone ? phone : contacts[index].phone,
  });
  await updateContacts(contacts);
  return updatedContact;
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
