const getPromise = (ms, name) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(`${name} resolved!`);
    }, ms);
  });

const promiseLauncher = async () => {
  console.log(`${new Date().toLocaleTimeString()} started`);

  const longPromise = getPromise(5000, 'long promise');
  const longResult = await longPromise;
  console.log(new Date().toLocaleTimeString() + ' ' + longResult);

  const shortPromise = getPromise(3000, 'short promise');
  const shortResult = await shortPromise;
  console.log(new Date().toLocaleTimeString() + ' ' + shortResult);
};

promiseLauncher();
