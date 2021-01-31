var fs=require('fs');
fs.appendFile('newfile.txt','Hello content!',function(err){
    if(err) throw err;
    console.log('Saved!');
});