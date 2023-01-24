const express = require('express');                             // import express module
const path = require('path');                                   // import path module

const friendsRouter = require('./routes/friends.router');       // import friends routing module
const messagesRouter = require('./routes/messages.router');     // import messages routing module

const app = express();                                          // create an Express application instance

app.set('view engine', 'hbs');                                  // set the view engine to handlebars
app.set('views', path.join(__dirname, 'views'));                // set the views directory

const PORT = 3000;                                              // specify the port to listen on

app.use((req, res, next) => {                                   // add a middleware function to log request data
  const start = Date.now();                                     // get the current time
  next();                                                       // call the next middleware function
  const delta = Date.now() - start;                             // calculate the time it took to complete the request
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`); // log the request method, url and time taken
});

app.use('/site', express.static(path.join(__dirname, 'public'))); // add middleware to serve static files from the 'public' folder
app.use(express.json());                                        // add middleware to parse JSON data in the request body

app.get('/', (req, res) => {                                    // add a route for the root URL
  res.render('index', {                                         // render the 'index' view
    title: 'My Friends Are VERYY Clever',
    caption: 'Let\'s go skiing!',
  });
});
app.use('/friends', friendsRouter);                             // use the imported friends routing module
app.use('/messages', messagesRouter);                           // use the imported messages routing module

app.listen(PORT, () => {                                        // start the server and listen on the specified port
  console.log(`Listening on ${PORT}...`);                       // log a message to the console when the server starts
});
