const add = (a, b) => a + b;
const square = (a) => a * a;

const addAndSquare = (a, b) => square(add(a, b));

function lowerCaseString(str) {
  return str.toLowerCase();
}

function splitWords(str) {
  return str.split(" ");
}

function joinWithDash(array) {
  return array.join("-");
}

joinWithDash(splitWords(lowerCaseString("My Favorite Function")));


// composition  //

// composition allows you to pipeline data through multiple functions 
//  to perform distinct operations on them. 
//  sometimes you need a helper function or compose function. 
// these can be created found in liberaries 