import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import contactsRouter from './routes/contacts.js';
const app = express();
const PORT = 3000;

console.log("Fake commit");

const connection = mongoose.connect('mongodb+srv://test:test123@cluster0.ijb5aob.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

app.use(bodyParser.json())
app.use('/contacts',contactsRouter);

app.listen(PORT, () => {
    console.log('Application is running');
})

const gracefullyShutdown = () => {
    connection.close();
}

process.on('SIGNTERM', gracefullyShutdown);
process.on('SIGNINT', gracefullyShutdown);
process.on('unhandledException', gracefullyShutdown);

