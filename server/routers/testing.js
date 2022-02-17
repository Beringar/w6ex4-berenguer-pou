const debug = require("debug")("api-calculator:sever");
const express = require("express");

const router = express.Router();

router.get("/testing", (req, res, next) => {
  debug("llando a testing");
  res.json({ testing: "testing is ok?" });
});

module.exports = router;
