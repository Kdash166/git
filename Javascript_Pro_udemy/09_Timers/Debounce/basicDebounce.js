function queryAPI() {
  console.log("MAKING AN API REQUEST!!!");
}

const searchInput = document.querySelector("#search");

let debounceTimeout;
searchInput.addEventListener("input", () => {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => {
    queryAPI();
  }, 400);
});

// debounce //

// debouncing is made to prevent a function from being called until 
// a certain amount of time is passed since the last event.
//  you do not want to query an API 9 times or 15 times 
// when your simple just typing every letter. 
// this is where debouncing is 
// if the user stops typing for 1 second 0.5 seconds
//  2 seconds then you make the  api call. 
// live searching is a good function and it is necessary
// for modern  websites but everytime a letter is typed it would make an API call. 
//  this isnt good it uses resources and processing power. 
//  debouncing causes a gap in this case between API calls which helps with efficiency. 
