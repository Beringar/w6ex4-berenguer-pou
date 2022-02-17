const debug = require("debug")("api-calculator:sever");
const express = require("express");

const router = express.Router();

router.get("/sum/:a/:b", (req, res, next) => {
  const { a, b } = req.params();
  debug(`Request received to sum ${a} and ${b}`);
  res.json({ result: `${+a + +b}` });
});
