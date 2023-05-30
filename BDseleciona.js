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

        var sql = "select * from agenda order by nome";

        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Dados da tabela");
        });
});