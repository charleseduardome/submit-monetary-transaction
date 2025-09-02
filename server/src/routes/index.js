const express = require("express");

const transactionRoutes = require("./transaction.routes");
const router = express.Router();

router.use("/", transactionRoutes);

module.exports = router;
