const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3');
const cors = require ('cors');
const apiRouter = require('./api/api');
const errorhandler = require('errorhandler');

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', apiRouter);
app.use(errorhandler())



app.listen(PORT, () => {
  console.log('Listening on port: ' + PORT);
});
module.exports = app;
