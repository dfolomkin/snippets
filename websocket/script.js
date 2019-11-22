const socket = new WebSocket('ws://localhost:8081');

socket.onopen = () => {
  console.log('Connection has been established');
};

document.forms.publish.onsubmit = function() {
  socket.send(this.message.value);
  return false;
};

const showMessage = message => {
  const messageElem = document.createElement('div');
  messageElem.appendChild(document.createTextNode(message));
  document.getElementById('subscribe').appendChild(messageElem);
};

socket.onmessage = event => showMessage(event.data);
