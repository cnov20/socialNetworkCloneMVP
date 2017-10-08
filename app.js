// Dependencies from node_modules folder created with npm init
const path = require('path');
const express = require('express');
const jsonServer = require('jsonServer');

// App Instantiation
const app = express();

app.engine('html', require('ejs').renderFile);

app.use(express.static('public'));


//app.use(express.static(path.join(__dirname, '/assets')));
//app.use(express.static(path.join(__dirname, '/css')));

app.get('/', function (req, res) {
  res.render('index.html');
});

app.listen(5000, function() {
  console.log('listening');
});
