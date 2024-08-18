const cancelButton = document.querySelector("#cancel");

const timeoutId = setTimeout(() => {
  window.location.href = "http://www.google.com";
}, 5000);
// this redirects the window to a different webiste

cancelButton.addEventListener("click", () => {
  clearTimeout(timeoutId);
  console.log("ABORTED THE REDIRECTION!");
});

// clearTimeout //

// clear time out prevents a function with setTimeout 
// from executing you need to might use this to prevent a redirection 
//  you can see this used above. you might need to abort an automatic function
// any time. this is important in Debouncing. it requires a timer ID. 
// whenever you setTimeout it returns a timeout identifier this can be stored to a variable 
// then used to clertimeout
//  you will be ortomatically redirected proceed go forward this is hwere this is uesful 
