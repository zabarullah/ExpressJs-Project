// importing friends model
const model = require('../models/friends.model');

// Function to handle POST request to create a new friend
function postFriend(req, res) {
  if (!req.body.name) {                             // Checking if the friend name is provided in the request body
    return res.status(400).json({                   // Return error if name is missing
      error: 'Missing friend name'
    });
  }

  // Creating a new friend object
  const newFriend = {
    name: req.body.name,
    id: model.length,
  };
  model.push(newFriend);                           // Adding the new friend to the model
  res.json(newFriend);                             // Sending the new friend object as a response
}

// Function to handle GET request to fetch all friends
function getFriends(req, res) {
  res.json(model);                                 // Send the entire friends model as a response
}

// Function to handle GET request to fetch a specific friend by id
function getFriend(req, res) {
  const friendId = Number(req.params.friendId);     // Getting the friend id from the request params
  const friend = model[friendId];                   // Getting the friend from the model
  // Checking if the friend exists
  if (friend) {
    res.status(200).json(friend);                   // Return the friend with status 200
  } else {
    res.status(404).json({                          // Return error if the friend does not exist
      error: 'Friend does not exist'
    });
  }
}

// Exporting the functions as an object
module.exports = {
  postFriend,
  getFriends,
  getFriend,
};
