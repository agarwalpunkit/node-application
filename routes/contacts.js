import { Router } from "express";
import { addContacts, getContacts } from "../controllers/contacts.js";
import { contactsValidation } from "../validations/contacts.js";

const router = Router();

router.post('/', contactsValidation, addContacts);

router.get('/', getContacts);

export default router;