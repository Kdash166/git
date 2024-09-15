const input = document.querySelector("#usernameInput");
const h1 = document.querySelector("#usernameDisplay");

const userInfo = {
  username: "",
};

const handler = {
  set: function (obj, property, newValue) {
    obj[property] = newValue;
    h1.textContent = "Hello there, " + newValue;
  },
};

const userProxy = new Proxy(userInfo, handler);

input.addEventListener("keyup", (evt) => {
  userProxy.username = evt.target.value;
// this udates user to what is written in the input
});

// this is often a common design pattern in React. 
// The Data Binding design pattern is a programming 
// pattern that enables automatic synchronization of data between the model (data source) 
// and the view (user interface) in an application. 
// This pattern is particularly prevalent in frameworks for building user interfaces, 
// where it is essential to ensure that the user 

// interface is always in sync with the underlying data and vice versa.
// Description: In React, data flows in one direction, from parent components to child components. 
// The state is managed at a higher level (often in the parent component), 
// and data is passed down through props.
