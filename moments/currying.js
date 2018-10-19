// 1
function curry(f, arg) {
  return f.bind(null, arg);
}

function add(a, b) {
  return a + b;
}

var addToTen = curry(add, 10);

// console.log(addToTen(2));
// console.log(addToTen(4));

// 2
function curry(func, initParam) {
  return function(param) {
    return func(initParam, param);
  };
}

function add(a, b) {
  return a + b;
}

var addToTen = curry(add, 10);

// console.log(addToTen(2));
// console.log(addToTen(4));

// 3
function curry(fn, ...initArgs) {
  return function(...extraArgs) {
    var fullArgs = initArgs.concat(extraArgs);
    if (fullArgs.length == fn.length) {
      return fn(...fullArgs);
    } else {
      return curry(fn, ...fullArgs);
    }
  };
}

function add(a, b, c) {
  return a + b + c;
}

var addC = curry(add);

console.log(addC(1, 2, 3));
console.log(addC(1)(2, 3));
console.log(addC(1, 2)(3));
console.log(addC(1)(2)(3));

var addOne = curry(add, 1);

console.log(addOne(2, 3));
console.log(addOne(2)(3));
