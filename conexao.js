
var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "c@tolic@"

});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

});
