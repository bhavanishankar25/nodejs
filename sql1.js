
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
   // database: 'hi'
});
connection.connect(function(err) {
    if (err) throw error
   
    console.log('Connected to the MySQL server.');
  });