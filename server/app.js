const express = require("express");
// const bodyParser = require("body-parser");

// const routes = require("./routes");
const app = express();
const port = 3000;

app.use(express.json());
// app.use(routes);

app.post("/user/transaction", (req, res, next) => {
  console.log(req.body);
  res.json(req.body);
});

// router.post("/user/transaction", (req, res) => {
//   console.log(req.body);
//   res.json(req.body);
//   // const description = req.body.description;
//   // console.log("🚀 ~ newTransaction:", description);
//   // const newTransaction = { amount: 10.0, description: "Sample Transaction" };
//   // transactions.push(newTransaction);

//   res.send("transactions:");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
