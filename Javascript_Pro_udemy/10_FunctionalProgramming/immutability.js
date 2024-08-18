const nums = [1, 2, 3, 4];

function push(arr, val) {
  return [...arr, val];
}

function removeLastItem(arr) {
  return arr.slice(0, -1);
}

// immutability  //

// functions that create copies of arrays or objects can help
// preserve the original data
// you can use Object.freeze() to stop an object from being mutated
//  the best way to prevent this is to make copie of the orginial data structure
//  some methods do this. 
// .slice .map .filter all mkae copies of the data
// immutability is important for fucntional programming, pure functions, and 
// react using push and pop mutates the original array. 
// if you use the spread operator you create a copy of the array.