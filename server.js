// const express=require('express')
// const app=express();

// app.listen(8080);
//    "test": "echo \"Error: no test specified\" && exit 1"

const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});