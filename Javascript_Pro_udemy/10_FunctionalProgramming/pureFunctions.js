// IMPURE
let value = 2;
function squareAndUpdateValue(num) {
  value = num * num;
  return value;
}

// PURE
function square(num) {
  return num * num;
}

// IMPURE
const colors = ["red", "orange"];
function addToArray(arr, value) {
  return arr.push(value);
}

// PURE
function pureAddToArray(arr, value) {
  return [...arr, value];
}

// pure functions //

// function should depend soley on the input 
// no states no mutation of external data 
// no side effects from the data.
// you can see the pure functions do not modfiy external 
// states they always return the same output from the same
// input.