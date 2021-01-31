var fs=require('fs');

fs.unlink('newfile3.txt',function(err){

    if(err) throw err;
    console.log('File Deleted!');
});