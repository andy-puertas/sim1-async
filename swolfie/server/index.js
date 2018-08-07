require('dotenv').config();

const express = require('express') 
    , massive = require('massive')
    , bodyParser = require('body-parser') 
    , cors = require('cors') 
    , ctrl = require('./controller');


const app = express();

app.use( bodyParser.json() );
app.use( cors() );


const {
  SERVER_PORT,
  CONNECTION_STRING
} = process.env;


// ENDPOINTS

app.get('/api/shelf/:id', ctrl.bins);
app.get('/api/bin/:id', ctrl.binDeets);
app.post('/api/bin/:id', ctrl.create)
app.delete('/api/bin/:id', ctrl.delete)
app.put('/api/bin/:id', ctrl.edit);


app.listen(SERVER_PORT, () => {
  console.log(`Listening on port:`, SERVER_PORT)
});


massive(CONNECTION_STRING)
  .then(dbInstance => {
    console.log("database is connected");
    app.set("db", dbInstance);
  })
  .catch(err => {
    app.set("db", dbInstance);
    console.log(err);
});
