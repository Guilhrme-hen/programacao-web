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

var Nome = "julio"
var Endereco = "samambaia"

var sql = "insert into agenda (nome, endereco) values ";
sql = sql + "('" + Nome + "' , '" + Endereco + "')"

con.query(sql, function (err, result) {
if (err) throw err;
console.log("Table created");
});
});