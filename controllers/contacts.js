import { Contacts } from "../models/contacts.js";

export const addContacts = async (req,res) => {
    const { body } = req;
    const { name, email, phone } = body;
    console.log('Adding Contact:', body);
    try {
        const query = {
            name,
            email,
            phone
        }
        const data = await Contacts.insertOne(query);
        console.log('Contact Added');
        res.json({status: 200, message: 'Contact Added'});
    } catch (err) {
        throw new Error(`Adding Contact Failed: ${err.message}`);
    }
}

export const getContacts = async (req, res) => {
    try {
        const contacts = await Contacts.find();
        console.log("Get Contacts:", contacts);
        res.json(contacts);
    } catch (err) {
        throw new Error('Fetching Contacts Failed'); 
    }
}