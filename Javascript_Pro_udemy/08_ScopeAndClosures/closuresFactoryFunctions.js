function createExponentFunction(exponent) {
  return function (val) {
    return val ** exponent;
  };
}

// this function returns an inner function that expects a value 
// raised to it

const square = createExponentFunction(2);
const cube = createExponentFunction(3);
const powFour = createExponentFunction(4);

function uniqueIdGenerator(prefix) {
  let id = 0;
  return function () {
    id += 1;
    return `${prefix}${id}`;
  };
}

const getBookId = uniqueIdGenerator("book-");
const getUserId = uniqueIdGenerator("user_");

// these fucntions will generate unique idea. 
// these generate simple ids. 

