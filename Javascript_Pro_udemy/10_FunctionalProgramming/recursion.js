// Factorial

// function factorial(n) {
//   let result = 1;
//   for (let i = n; i > 1; i--) {
//     result *= i;
//   }
//   return result;
// }

// no variable or state that is mutated can be shorter and easier to reason 
// sometimes it can be alot harder. recursion does align well with functional 
// programming. 
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
    // base case
  }
  return n * factorial(n - 1);
}

// recursion //

// allows a function to be repeated several times
// without having to write a loop.
// must include a base case to prevent 
// infinate loops