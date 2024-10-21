const express = require("express");
const router = express.Router();

// different model routers

router.use("/devices", require("./devices"));
router.use("/carts", require("./carts"));

module.exports = router;
