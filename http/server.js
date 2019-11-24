const http = require('http');
const data = require('./data.json');

const PORT = 3000;
const CONTENT_TYPE = {
  urlencoded: 'application/x-www-form-urlencoded'
};

const parse = query =>
  query.split('&').reduce((acc, curr) => {
    const arr = curr.split('=');
    acc[arr[0]] = arr[1];
    return acc;
  }, {});

http
  .createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    switch (req.method) {
      case 'GET':
        res.setHeader('Content-Type', 'application/json; charset=utf-8;');
        res.end(JSON.stringify(data));
        break;
      case 'POST':
        if (req.headers['content-type'] === CONTENT_TYPE.urlencoded) {
          let body = '';

          req.on('data', chunk => {
            body += chunk.toString();
          });
          req.on('end', () => {
            res.setHeader('Content-Type', 'application/json; charset=utf-8;');
            res.end(JSON.stringify(parse(body)));
          });
        } else {
          res.statusCode = 415;
          res.end(`Content type ${CONTENT_TYPE.urlencoded} is only supported`);
        }
        break;
      default:
        res.statusCode = 405;
        res.end(`Method ${req.method} is not supported`);
    }
  })
  .listen(PORT);
