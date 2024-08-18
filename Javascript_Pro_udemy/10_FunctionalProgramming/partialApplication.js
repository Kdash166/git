function multiply(a, b) {
  return a * b;
}

function partial(func, ...fixedArgs) {
  return function (...remainingArgs) {
    return func(...fixedArgs, ...remainingArgs);
  };
}

const double = partial(multiply, 2);
const triple = partial(multiply, 3);

function fetchData(url, apiKey, params) {
  const queryString = new URLSearchParams(params).toString();
  const fullUrl = `${url}?${queryString}`;

  console.log(`Sending request to ${fullUrl}`);
  console.log(`With API key of ${apiKey}`);
}

const myApiKey = "my-secret-api-key";
const myApiUrl = "https://api.mywebsite.com/data";

const googleApiKey = "google-secret-api-key";
const googleApiUrl = "https://api.google.com/data";

const fetchMyAPI = partial(fetchData, myApiUrl, myApiKey);
const fetchGoogle = partial(fetchData, googleApiUrl, googleApiKey);

fetchMyAPI({ id: 1, sort: "desc" });

fetchGoogle({ search: "chicken" });

/// partial application ///

// bind allows us to make a new function with arguments baked in or binded in. 
// applying some aguments to a function and returning a new function that requires 
// less arguments.

function myMultiply(a,b){
  return a * b;
}

const myDouble = multiply.bind(null, 2);
const myTriple = multiply.bind(null, 3);


// this is useful as you can partially apply parameters especially if you need
// different situations 
// imagine different tax rates you could bake in the income tax or sales tax. 
// so the rate is baked in. You can do this using .bind or using a helper function 
//  like the partial function below. Or you can find functions to help you.

// function partial(func, ...fixedArgs) {
//   return function (...remainingArgs) {
//     return func(...fixedArgs, ...remainingArgs);
//   };
//}
