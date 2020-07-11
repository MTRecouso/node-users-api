require('dotenv').config();

const port = process.env.PORT || 3000;

const express = require('express');

const server = express();

const router = require('./routes');

const database = require('./database');

database.init().then(() => {
  server.use(router);
  server.listen(port);
});
