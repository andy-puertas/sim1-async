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
