function outerFunction() {
  let outerVariable = "I am from outer!";
  function innerFunction() {
    console.log("I AM THE INNER FUNCTION");
    console.log("outerVariable is", outerVariable);
  }
  return innerFunction;
}

const myClosure = outerFunction();
myClosure();

function idGenerator() {
  let count = 1;
  return function generate() {
    return count++;
  };
}

const nextId = idGenerator();

// this allows you to create a function but that can count an ID
// but prevents global polution count could be used for something else.

// closures //

// the idea is this is a function that is designed inside of a function
// that has access to the outside functions variables.
// if a function is defined inside of an inner function it allows
// outer variables even after the outer function has executed.
// closures essentiall allow you to produce private variables that
// dont enter the global scope but can still be read and called from outer
// functions by inner functions.

const counter = (function () {
  let count = 0;
  return {
    increment: function () {
      return ++count;
    },
    decrement: function () {
      return --count;
    },
    getCount: function () {
      return count;
    },
  };
})();
//console.log(count);
// count cannot be reached it is inside the function
// this improves the modularity security and cleaness of the code
//  the variable is safely interacted with but cannot be changed or manpipulated directly.
console.log(counter.increment());
counter.increment();
counter.increment();
console.log(counter.getCount());
counter.decrement();
counter.decrement();
console.log(counter.decrement());
