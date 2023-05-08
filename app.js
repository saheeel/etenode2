var http = require("http");
http.createServer(function (request, response) {

   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end('Hello World. This is first node applicaton\n');
}).listen(8081);

console.log('Server running at local host 8081');