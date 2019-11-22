const http = require('http');
const PORT = 3000;

const data = require('./data.json');

http
  .createServer((req, res) => {
    switch (req.method) {
      case 'GET':
        res.setHeader('Content-Type', 'application/json; charset=utf-8;');
        res.end(JSON.stringify(data));
        break;
      default:
        res.statusCode = 400;
        res.end(`Method ${req.method} is not supported`);
    }
  })
  .listen(PORT);
