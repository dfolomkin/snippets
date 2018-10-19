console.log("cookie: " + document.cookie);
console.log("storage: ");
console.dir(window.localStorage);

const addCookieBtn = document.getElementById("addCookieBtn");
addCookieBtn.addEventListener("click", () => {
  const date = new Date(2019, 0);
  // firefox не устанавливает заранее протухшую куку
  document.cookie = `username=dfolomkin; expires=${date}`;
  console.log("cookie: " + document.cookie);
});

const addStorageItemBtn = document.getElementById("addStorageItemBtn");
addStorageItemBtn.addEventListener("click", () => {
  const date = new Date();
  // firefox не сохраняет localStorage, если в настройках выбрано "Не сохрянять историю"
  window.localStorage.setItem("username", "dfolomkin");
  console.log("storage: ");
  console.dir(window.localStorage);
});
