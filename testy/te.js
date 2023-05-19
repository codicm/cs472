const express = require("express");
const app = express();
const port = 3000;
const sq=require('./square');
const wiki=require("./wiki");


app.get("/", function (req, res) {
  res.send(`helo sweety how is life ${sq.area(4)}`);
  res.send(`2helo sweety another ${sq.perimeter(2)}`);
});

app.use("/wiki",wiki);

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

