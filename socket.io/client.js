const socket = io('http://localhost:8081');

socket.on('connect', () => {
  console.log('Connection has been established');
});

document.forms.send.addEventListener('submit', e => {
  e.preventDefault();
  socket.emit('client-message', e.target.message.value);
  e.target.reset();
});

const showMessage = msg => {
  const msgEl = document.createElement('div');

  msgEl.append(document.createTextNode(msg));
  document.getElementById('chat').prepend(msgEl);
};

socket.on('server-message', showMessage);
