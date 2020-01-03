const socket = new WebSocket('ws://localhost:8081');

socket.onopen = () => {
  console.log('Connection has been established');
};

document.forms.send.addEventListener('submit', e => {
  e.preventDefault();
  socket.send(e.target.message.value);
  e.target.reset();
});

const showMessage = msg => {
  const msgEl = document.createElement('div');

  msgEl.append(document.createTextNode(msg));
  document.getElementById('chat').prepend(msgEl);
};

socket.onmessage = e => showMessage(e.data);
