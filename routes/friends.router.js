const express = require('express');

// Importing friends controller
const friendsController = require('../controllers/friends.controller');

// Creating an instance of express Router
const friendsRouter = express.Router();

// Middleware function to log IP address of incoming request
friendsRouter.use((req, res, next) => {
  console.log('ip address:', req.ip);
  next();
});

friendsRouter.post('/', friendsController.postFriend);          // Route for creating a new friend

friendsRouter.get('/', friendsController.getFriends);           // Route for fetching all friends

friendsRouter.get('/:friendId', friendsController.getFriend);   // Route for fetching a specific friend by id

// Exporting the router 
module.exports = friendsRouter;
