var mysql =require('mysql');
var connection =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"node1"
});

connection.connect(function(err){
    if(err) throw err;
    console.log("Connected");
    var sql="ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
    connection.query(sql,function(err,result){
        if(err) throw err;
        console.log("Table created");
    });
});