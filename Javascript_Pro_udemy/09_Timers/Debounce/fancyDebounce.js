function queryAPI(searchTerm, color) {
  console.log(`Searching the API for ${searchTerm}`);
  console.log(`color argument is ${color}`);
}

const searchInput = document.querySelector("#search");

function debounce(callback, delay) {
  let timeoutId;
  return (...args) => {
    // this collects any number of arguments
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    // this clears a timeout if a timeout exists
    timeoutId = setTimeout(() => {
      callback(...args);
      // this returns the function maintaining the arguments
    }, delay);
  };
  // this sets a timeout if no timeout exists. and calls the function back 
  // this returns a debounced version of any function by applying a new delay time to 
  // its execution.
}

const debouncedQueryAPI = debounce(queryAPI, 300);

searchInput.addEventListener("input", (evt) => {
  debouncedQueryAPI(evt.target.value, "purple");
});

// debounce fancy //

// this uses a higher order function as the function takes another function as an 
// argument it expects a delay and a callback function . 