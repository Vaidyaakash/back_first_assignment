var http = require('http');

//create a server object:
const server = http.createServer(function (req, res) {
  res.write('<h1>Hello World! this is 1st assignment 1</h1>'); 
  res.write('<h1>Postman</h1>'); 
  res.write(JSON.stringify({name:"akash",age:22,gender:"male"})); 
  
  res.end();
})

server.listen(4444);