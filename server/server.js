const debug = require("debug")("api-calculator:server");
const express = require("express");
const morgan = require("morgan");
const routerTesting = require("./routers/testing");

const app = express();

const initializeServer = (port) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(`Server started at http://localhost:${port}`);
      resolve();
    });
    server.on("error", (error) => {
      reject(error);
    });
  });

app.use(morgan("dev"));

app.use(routerTesting);

module.exports = initializeServer;
