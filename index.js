require("dotenv").config();
const debug = require("debug")("api-calculator:server");
const chalk = require("chalk");

const initializeServer = require("./server/server");

const port = process.env.SERVER_PORT || 5000;

(async () => {
  try {
    await initializeServer(port);
  } catch (error) {
    debug(chalk.red(error.message));
  }
})();
