const configuration = require("dotenv").config();
const { initializeServer } = require("./server/server");

const port = process.env.SERVER_PORT || 5000;

initializeServer(port);
