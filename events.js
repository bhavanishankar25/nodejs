var fs = require('fs');
var rs = fs.createReadStream('./newfile.txt');
rs.on('open',function(){
    console.log('File is open!');

});