var mysql =require('mysql');
var connection =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"1234"
});

connection.connect(function(err){
    if(err) throw err;
    console.log("Connected");
    connection.query("CREATE DATABASE NOde1",function(err,result){
        if(err) throw err;
        console.log("Database created");
    });
});