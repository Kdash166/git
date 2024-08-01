function doSomeSetup(options = {}) {
  options.timeout ??= 3000; // default timeout of 3 seconds
  options.retries ??= 5; // default of 5 retries
  console.log(options);
}

// nullish Coalescing Assignment //

//  this will return the left side value unless the left side
// value is null or undefined 

//  you may not want to update a value if it is 0 or "" or false
// but if it is empty null undefined then you generally will 
// want to update it.

// this could be used if you needed to factor in 
//  0 in retries or 0 in timeout as Or assignment operator ||= wouldnt return the correct object as 0 is a falsy value
// this is good for when constructing objects that need 0 or empty string.
