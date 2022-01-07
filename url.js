var http = require('http')
var url = require('url')
var querystring = require('querystring')

var server = http.createServer(function(req,res){
    var query = url.parse(req.url).query;
    uname = querystring.parse(query)["uname"];
    branch = querystring.parse(query)["branch"];
    console.log(uname)
    console.log(branch)
}).listen(3000);
console.log("Server started on port no. 3000!!!");