const express = require("express");

const router = express.Router();

const { getMsg, postMsg } = require("../controllers/msgController");

router.get("/", getMsg);

router.post("/", postMsg);

module.exports = router;
