const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
});

io.on('connection', socket => {
  const id = Math.trunc(Math.random() * 1000);

  console.log('New connection', id);

  socket.on('client-message', msg => {
    console.log('Message has been recieved:', msg);

    // broadcasting
    io.emit('server-message', msg);
  });

  socket.on('disconnect', function() {
    console.log(`Connection ${id} has been closed`);
  });
});

const port = 8081;

http.listen(port, () => {
  console.log('WS server is listening on:', port);
});
