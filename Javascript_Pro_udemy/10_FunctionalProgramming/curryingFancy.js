function add3(x, y, z) {
  return x + y + z;
}

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

const curriedAdd = curry(add3);

// currying //
// this is less used practically and is used by some expert functional programmers 
//  this type of function which curries functions generally can be found in a 
// liberary like the partial and compose functions helper functions.
