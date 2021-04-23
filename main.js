const express = require('express');
const path = require('path');
require('dotenv').config();
const api = require('./api')
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8000;

// app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.bodyParser());

app.get('/', (req, res) => {
  res.render('index.html');
});



/**
 * Include urls
 * */


app.use('/api/', api);

/**
 *
 * */


app.listen(port, () => {
  console.log(`Risk score is listening at http://localhost:${port}`);
});
