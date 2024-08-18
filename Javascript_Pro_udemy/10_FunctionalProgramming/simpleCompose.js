function compose(fn1, fn2) {
  return function (val) {
    return fn1(fn2(val));
  };
}

function repeatTwice(str) {
  return str.repeat(2);
}

function upperCase(str) {
  return str.toUpperCase();
}

const repeatAndUppercase = compose(repeatTwice, upperCase);

const square = (a) => a * a;
const double = (a) => a * 2;

const doubleAndThenSquare = compose(square, double);


// composition //

// allows us to build a chain or a pipe line of functions
// that process data. You can make simple functions 
// the fuse them together. 
// if using these methods it is easier to make named short functions 
// then it is obvious what each part plays.
