var fs = require('fs')

fs.rename('newfile1.txt','newlycreatedfile.text',function(err){
    if(err) throw err;
    console.log('File renamed!!')

});