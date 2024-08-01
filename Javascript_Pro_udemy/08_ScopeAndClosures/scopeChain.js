// 1. In the local scope
// 2. Any outer functions
// 3. Global scope
// it looks first inside the function 
// the the next function
// then the next function
// or the global scope

let age = 10;

function outer() {
   let age = "ageless";
  //  if you comment out this and eternal you can see how 
  // the scope chain prioratises were it searches for the 
  // age variable
  function inner() {
     //let age = "Eternal";
    function superInner() {
      console.log(age);
    }
    superInner();
  }
  inner();
}
console.log(outer())

// static scope //

//  javasctipt bases where the variable was declared
// rather than dynamic scope which would mean it may 
// change depending on how and where you call the variable.

// hoisting //

// yumYum returns as undefined because var has been intialised 
// but has yet to be assinged its value pizza
console.log(yumYum);
 var yumYum ="pizza"

//  you can see what is actually happening in the example below
var food = undefined;
console.log(food);
food ="pizza"
// this can lead to some problems 

function blah (){
  console.log(color);
  let color = "black";
}
//  the same is true for functions it actually hoists variables to the top of the 
// scope not the top of the of the script file, that is a misconception.
// the temporal deadzone is where a variable is at the top of the scope
// but wont let us do anything with it until it is actually declared. 