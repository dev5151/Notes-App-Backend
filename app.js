const express = require('express');
const bodyParser = require('body-parser');


// create express app
const app = express();

app.use(bodyParser.json())

const {mongoose} = require('./database.config.js');


// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

require('./app/routes/note.routes.js')(app);

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});