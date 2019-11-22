const ws = require('ws');

let clients = {};

const server = new ws.Server({
  port: 8081
});

server.on('connection', ws => {
  const id = Math.trunc(Math.random() * 1000000);
  clients[id] = ws;
  console.log('New connection ' + id);

  ws.on('message', message => {
    console.log('Message has been recieved: ' + message);

    // broadcasting
    for (let key in clients) {
      clients[key].send(message);
    }
  });

  ws.on('close', () => {
    console.log(`Connection ${id} has been closed`);
    delete clients[id];
  });
});
