import db from './src/utils/database'
// Require modules
const express = require('express');

// Create the Express app
const app = express();

// Configure the app (app.set)


// Mount middleware (app.use)


// Mount routes
app.get('/', (req, res) => {
  	res.send('<h1>Hello World!</h1>');
});

// get all assets
app.get('/api/portfolio', (req, res) => {
     res.status(200).send({
       success: 'true',
       message: 'todos retrieved successfully',
       assets: db
     })
   });

// Tell the app to listen on port 3000
app.listen(3000, function() {
 console.log('Listening on port 3000');
});