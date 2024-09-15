const myModule = (() => {
  // arrow function wrapped in brackets immediately envoked expression
  // runs once.
  const privateVar = "I AM PRIVATE!!!";
  const privateMethod = () => "I AM A PRIVATE METHOD";

  return {
    publicVar: "I AM PUBLIC!!!",
    publicMethod: () => {
      console.log("calling private method: ", privateMethod());
    },
  };
})();

// there is privateVar the function is envoked once and it only runs immediately 
// you do  not have access to PrivateVar or Private method only the function has. 
// because they dont exist in the global scope you dont have to worry about naming issues. 


const counter = (() => {
  let count = 1;
  return {
    getCount: () => count,
    increment: () => count++,
  };
})();

// fucntionality is encapsulated you can call methods but you cannot access count directly 
// you have to use get count and increment. Jquery used the module pattern to hide 
// alot of stuff behind the scenes. 

// module pattern //

// The module pattern ensures private and public encapsulation. 
// protecting global namespace, might use immediately envoked expressions. 

// module pattern is less common now