const path = require('path');

// Function to handle GET request to '/messages'
function getMessages(req, res) {
  res.render('messages', {                          // Renders a view called 'messages' and send data to it.
    title: 'Messages to my Friends!',
    friend: 'Elon Musk',
  });

  // Uncommenting this line will send a file instead of rendering a view
  // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'skimountain.jpg'));
}

// Function to handle POST request to '/messages'
function postMessage(req, res) {
  console.log('Updating messages...');
}

// Exporting the functions as an object
module.exports = {
  getMessages,
  postMessage,
};
