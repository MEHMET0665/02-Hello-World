const http = require("http");
const host = 'localhost';
const port = 5000;
const data = JSON.stringify(
  'this is data page'
);
const student = JSON.stringify(
  'this is student page'
);
const admin = JSON.stringify("this is admin page ");

const requestListener = function (req, res) {
  res.setHeader("Content-Type", "application/json");
  switch (req.url) {
    case "/":
            res.writeHead(200);
            res.end('this is home page');
            break
    case "/student":
              res.writeHead(200);
              res.end(student);
              break
     case "/admin":
                res.writeHead(200);
                res.end(admin);
                break
   case "/data":
                  res.writeHead(200);
                  res.end(data);
                  break        
      default:
                  res.writeHead(404);
                  res.end(JSON.stringify('error'));
      
      
  }
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});