
var http = require('http')
var server = http.createServer(function(req,res){
    res.writeHead(200,{"content-type" : "text/html"})
    res.write("hello, i started  the server")
    res.end()
}).listen(3000)
console.log("server started on 3000")