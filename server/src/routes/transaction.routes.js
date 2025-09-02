const express = require("express");
const router = express.Router();

let transactions = [];

router.post("/transactions", (req, res) => {
  const amount = req.body.amount;
  const description = req.body.description;

  transactions.push({ amount, description });

  res.status(201);
  res.send(transactions);
});

module.exports = router;
