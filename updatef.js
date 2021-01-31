var fs =require('fs');

fs.appendFile('newfile.txt','Thiss is new text',function(err){
    if(err) throw err;
    console.log('Updated!');
});