const express = require('express');

const app = express();

const bodyParser = require('body-parser');
const path = require('path');
const eventsRouter = require('./routes/eventsRouter');
const db = require('./db');

const port = 8081;

const http = require('http').Server(app);

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTION');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../build')));

app.use('/events', eventsRouter);

app.get('/test', function (req, res) {
  res.send('Testing 1, 2, 3...');
});

const server = http.listen(port);
console.log(`Server is running on port: ${port}`)