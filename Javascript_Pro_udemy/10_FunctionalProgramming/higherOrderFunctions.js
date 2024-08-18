// Higher Order Functions
// A function that recieves another function as an argument, returns a function, or does both

function doTwice(func) {
  func();
  func();
}

// expects a fucntion as an argument then 
// repeats the function twice

doTwice(function () {
  console.log("HELLO YOU PIG FACED RAT PERSON");
});

function multiplyBy(factor) {
  return function (number) {
    return number * factor;
  };
}
// factory function this allows you to make similiar
// fucntions. this function returns the function as an arguemnt 
// but it needs to be saved in a variable to call it. 

const triple = multiplyBy(3);
const double = multiplyBy(2);
const multBy10 = multiplyBy(10);

// higher order function //

// receives another function as an argument
// or returns a function or both!
// normally returns another function

