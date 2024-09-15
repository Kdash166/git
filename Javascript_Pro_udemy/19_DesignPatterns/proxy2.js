function multiply(a, b) {
  console.log(a * b);
}

function sum(a, b) {
  console.log(a + b);
}

const handler = {
  apply: function (targetFunc, thisArg, argsList) {
    console.log("YOU RAN THE FUNCTION!!!");
    console.log("args are:", argsList);
    targetFunc(...argsList);
  },
};

const multiplyProxy = new Proxy(multiply, handler);
const sumProxy = new Proxy(sum, handler);

// functions proxy //

// functions are also objects so we can also proxy functions
// the trap or handler that important here is apply.
// it calls the function but first it runs the apply function first. 
// the handler is passed through then the function is called. 
// you can use the same handler rules so you can add logging this 
// could be useful for debugging or test cases. 
// this can be used for logging 
// it can be used for valudation. 
// it allows us the prevent access to an object or prevent running functions.