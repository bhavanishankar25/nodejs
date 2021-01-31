var fs =require('fs');

fs.writeFile('newfile1.txt','THis wil replace',function(err){
    if(err) throw err;
    console.log('Replaced!!');
});