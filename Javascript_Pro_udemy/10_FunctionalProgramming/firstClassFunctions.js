function greet(person) {
  console.log(`Hello there, ${person}`);
}

function hate(person) {
  console.log(`I hate you, ${person}`);
}

function callWithBlue(func) {
  func("Blue");
}

callWithBlue((color) => {
  console.log(`${color} is the best color`);
});


// first class functions //

// Javascript treats functions as first class meaning
// functions can be stored in variables returned by 
// other functions called as arguements functions can be stored in an array
// or an object as a method.
// functioncs can also be provided as arguments (callback functions)
// 


