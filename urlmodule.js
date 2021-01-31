var url =require('url');
var adr ='http://localhost:8080/default.htm?year=2017&month=february';
var q=url.parse(adr,true);

console.log(q.host);//returns localhost
console.log(q.pathname); //returns '/default.html'
console.log(q.search); //returns '?year=2017&month=february'

var qdata =q.query; //returns an object: {year:2017,month:'feb'}
console.log(qdata.month);//returns 'feb'