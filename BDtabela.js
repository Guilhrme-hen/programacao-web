var mysql = require('mysql2');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "c@tolic@",
    database: "aula"
});

con.connect(function(err) {    
if (err) throw err;
console.log("Connected!");
var sql = "CREATE TABLE agenda (name VARCHAR(255), Endereço VARCHAR(255))";

con.query(sql, function (err, result) {
if (err) throw err;
console.log("Table created");
});
});