const API_URL = 'http://localhost:3000/api';

const createRowEl = rowData => {
  const colsFrag = document.createDocumentFragment();

  for (prop in rowData) {
    const colEl = document.createElement('td');
    colEl.innerHTML = rowData[prop];
    colsFrag.appendChild(colEl);
  }

  const rowEl = document.createElement('tr');
  rowEl.appendChild(colsFrag);

  return rowEl;
};

// LOAD USERS

const loadUsersBtnEl = document.getElementById('btn-load-users');

loadUsersBtnEl.addEventListener('click', () => {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', new URL(API_URL));
  xhr.responseType = 'json';
  xhr.send();
  xhr.onload = () => {
    const usersTableBodyEl = document.getElementById('tbl-body-users');

    usersTableBodyEl.innerHTML = '';

    for (item of xhr.response) {
      const rowEl = createRowEl(item);
      usersTableBodyEl.append(rowEl);
    }
  };
});

// ADD USER

const addUserForm = document.forms.addUser;

addUserForm.addEventListener('submit', event => {
  // prevent <form name="addUser" method="POST" action="http://localhost:3000">
  event.preventDefault();

  const formEncodedData = `first_name=${event.target.firstName.value}&last_name=${event.target.lastName.value}`;
  const xhr = new XMLHttpRequest();

  xhr.open('POST', new URL(API_URL));
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.responseType = 'json';
  xhr.send(formEncodedData);
  xhr.onload = () => {
    event.target.reset();
    console.log(xhr.response);
  };
});
