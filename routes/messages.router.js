const express = require('express');

// Importing messages controller
const messagesController = require('../controllers/messages.controller');

// Creating an instance of express Router
const messagesRouter = express.Router();

messagesRouter.get('/', messagesController.getMessages);            // Route for fetching all messages

messagesRouter.post('/', messagesController.postMessage);           // Route for creating a new message

// Exporting the router 
module.exports = messagesRouter;
