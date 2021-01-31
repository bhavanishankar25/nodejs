var fs =require('fs');
fs.writeFile('newfile3.txt','Hello man',function(err){
    if (err) throw err;
    console.log('Saved!');

});