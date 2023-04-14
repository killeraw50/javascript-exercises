const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  const summation = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return summation;
};

const multiply = function(array) {
  let x = array[0];
  for (let i = 1; i < array.length; i++) {
    let y = array[i];
    let ans = x * y;
    x = ans;
  }
  return x;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(input) {
	if (input === 0 || input === 1) {
    return 1;
  }
  let x = 1;
  for (let i = 2; i <= input; i++) {
    x *= i;
  }
  return x;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
