var http = require('http');
var dt=require('./datetime.js');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'test/html'});
    res.write("The date and time are currently:" +dt.myDateTime());
    res.end();
}).listen(8080);
console.log('Server running!')