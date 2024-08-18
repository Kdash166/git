// not curried //
function add(a, b, c) {
  return a + b + c;
}
// curried //
function addCurry(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
// addCurry(2, 1, 1);
// this also works  
addCurry(3)(3)(1);


// currying //

// currying is a function with any number of arguments
// if you call it with less arguments it returns a smaller partial 
// which you can then call with the remaining arguments.
// some developers beleive that it allows for cleaner more readable and easier to maintain code.
// however this is only really experts in functional programming.