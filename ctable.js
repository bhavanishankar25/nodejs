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
    var sql="CREATE TABLE customers(name VARCHAR(255),address VARCHAR(255))";
    connection.query(sql,function(err,result){
        if(err) throw err;
        console.log("Database created");
    });
});