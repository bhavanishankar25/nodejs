var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "node1"
});

con.connect(function(err) {
    if (err) throw err;
    var sql = "SELECT *FROM customers LIMIT 5 OFFSET 2";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });