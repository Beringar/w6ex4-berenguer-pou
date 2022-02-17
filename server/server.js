const debug = require("debug")("api-calculator:sever");
const express = require("express");

const app = express();

const initializeServer = (port) => {
  app.listen(port);
  debug(`Server started at port ${port}`);
};

module.exports = { initializeServer };
