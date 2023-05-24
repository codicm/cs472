var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "",
  password: "",
  port : 3307

});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

