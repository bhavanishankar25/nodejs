var mysql =require('mysql');

var con=mysql.createConnection({

    host:"localhost",
    user:"root",
    password:"1234",
    database:"node1"
});

con.connect(function(err){
    if(err) throw err;
    console.log("Connected!");

    var sql="INSERT INTO customers(name,address) VALUES('Michelle','Blue Village 37')";
    con.query(sql,function(err,result){
        if(err) throw err;
        console.log("inserted,ID:"+result.insertId);
    });
});