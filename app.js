const express = require('express');
var bodyParser = require('body-parser');
const routes = require('./routes/api');

const app = express();
const port = process.env.PORT || 8888;
app.use( bodyParser.json() );    // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({  // to support URL-encoded bodies
  extended: false
})); 


app.use('/api/array', routes);

app.listen(port, () => console.log(`the-array is listening on port: ${port}`));
