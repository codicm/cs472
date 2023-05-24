const mysql = require('mysql');

exports.db = mysql.createConnection({
    host: "127.0.0.1",
    user: "luwi",
    password: "123456789",
    database: "entries"
});
