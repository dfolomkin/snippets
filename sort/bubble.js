const bubbleSort = sourse => {
  const length = (sourse && sourse.length) || 0;
  let result = sourse ? [...sourse] : sourse;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (result[j] > result[j + 1]) {
        const buff = result[j + 1];
        result[j + 1] = result[j];
        result[j] = buff;
      }
    }
  }

  return result;
};

const arr = Array.from(Array(10), () => Math.floor(10 * Math.random()));

console.log(arr);

const sortedArr = bubbleSort(arr);

console.log(sortedArr);
