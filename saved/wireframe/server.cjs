var http = require('http');
var fs = require('fs');
var path = require('path');
http.createServer(function(req, res) {
  var filePath = '.' + (req.url === '/' ? '/main_wireframe_saveinstance.html' : req.url);
  var ext = path.extname(filePath);
  var ct = {'.html':'text/html','.css':'text/css','.js':'application/javascript','.png':'image/png','.jpg':'image/jpeg','.svg':'image/svg+xml'};
  fs.readFile(filePath, function(err, data) {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200, {'Content-Type': ct[ext] || 'text/plain'});
    res.end(data);
  });
}).listen(8080, function() {
  console.log('Server running at http://localhost:8080');
});
