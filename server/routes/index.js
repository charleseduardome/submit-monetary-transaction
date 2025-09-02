const express = require("express");

const router = express.Router();

const transactions = [];

router.post("/user/transaction", (req, res) => {
  console.log(req.body);
  res.json(req.body);
  // const description = req.body.description;
  // console.log("🚀 ~ newTransaction:", description);
  // const newTransaction = { amount: 10.0, description: "Sample Transaction" };
  // transactions.push(newTransaction);

  res.send("transactions:");
});

module.exports = router;
