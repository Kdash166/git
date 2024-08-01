var color = "red";

function blah() {
  console.log(color);
  var animal = "Flamboyant Cuttlefish";
  console.log(animal);
}

if (true) {
  console.log(color);
  var food = "Chicken Parmesan";
}

// this couldnt be read as it is declared inside a variable
// console.log(food);
// console.log(animal);
// because these were delcared inside of the function the scope cannot be recognised

for (var i = 0; i < 10; i++) {
  console.log("INSIDE THE LOOP", i);
}

console.log("AFTER THE LOOP IS OVER!", i);

// scope basic //
// Var is available everywhere inside all code blocks
// but if you use var inside of a code block it is scoped to that function
// using var actually declares the variable on the window
// this means you can potentially overwrite properties on the window
// object erasing some of the functionality in the browser

// let and const scope //
// let allows reassignment
// const doesnt
let origin = "Ethiopia"
// window.origin this is will not be added to the window object 
// so it wont overwite anything and the same is true of const
// if you declare let in a function it is scope to that function 
// so is const 
// these are block scoped this is the key distinction between let const and var 
// var is globally scoped 
// only variables declared with VAR will be added to the window object
