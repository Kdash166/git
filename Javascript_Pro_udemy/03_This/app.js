const person = {
    name: "Conan",
    city: "Los Angeles",
    sing: function () {
        return `${this.name} sings LA LA LA`
    },
};

const pSing = person.sing
// assigned method to constant normally fine but 
// this still runs the function but the key word this 
// no longer has the correct value. but why?

pSing()
// this is === window.pSing() so it cannot find name in the window option.
// this is running in the global scope.
// The key word this //

// a function is actually called on a global object 
// that is the browser window in js browsers is an object
// in NODE.js there is a global object. 
// the value of the keyword this is dependant on what kind 
// of object it is call on. 
// even functions that stand alone like greet() is still called
// on an object every function in javascript is.
//  console.log() === window.console.log() behind the scenes 
// the window is put on.
// the keyword of the value this is dynamically evaluate 
// based on context. 

function whatIsThis(){
    console.log("The value of this is:", this)
}

whatIsThis();
//  these two are the same
window.whatIsThis();
// ^ the value of this is whatever is on the left side of the dot.
// this is the window in this case.

const obj = {
    whatIsThis: whatIsThis,
    color: "purple",
    age: 2,
};

    obj.whatIsThis();

//   ^ in this case  this is the object
//  this.undefined gives you undefined
// undifined.function gives you an error. 
// the word this in javascript can be difficult to use 
// because it acts as a different values depending on 
// the context. 
// we can assign this to get past this issue.

// call allows you to call an object on a function

// fdance.call(fluffy, "tango");

//  the function fdance will call and it takes the arguments
// fluffy and "tango".
// this allows you to resuse methods sharing them across objects. 
// it also allows you to define which method you wish to define. 




//  apply //
//  apply is similar to call but it expects all arguments to be in  an array.
// fdance.apply(fluffy, ["Salsa","Tango","Bop"])
//  some methods like Math.max wants a list like input
numArr = [1,2,3,4,5, 34, 25]

console.log(Math.max(numArr));
// the above doesnt work 
console.log(Math.max(...numArr));
// the spread operator works
console.log(Math.max(2,3,4,5, 34, 25));
// copying the value of the array works
console.log(Math.max.apply(null, numArr))
// because the results are in an array you can use the key word
// apply.(null is their because there is no use of this)
// in the same way that call allows you to determine what this 
// is called too. function.call(thisReference, argument )
// apply also functions the the same way. Apply passes each argument to the function,
// aslong as those arguments are encapsulated in an array [].

// bind // 

// bind allows you to bind a function to an object so it acts as its permenant
// argument.
const sing = person.sing.bind(person);
// this creates a new function with perminantly bound arguments in it 


console.log(sing())

console.log(sing.call(null, ["tango","sarah","joey"]))
// doesnt matter what I do window.sing() remains bound to person object
//  you can permabind both the context of this and arguments.

// you may want to bake an argument into a function for example
// cosnt applyMTsalesTax = applySalesTax.bind(null, 0.0725)
// this binds the argument into a new declared function. 
// this could be good if you needed to have boss damage multiplyer
// normal enemy multiplier. 
//  const bossDamageMultiplyer =  damageMultiplyer(null, 5);
//  const enemyDamageMultiplyer =  damageMultiplyer(null, 2.5);
function multiply(a,b){
    return a * b;
}
const double = multiply.bind(null, 2);
const triple = multiply.bind(null, 3);
//bind is good for taking a base function and setting default 
// arguments which create a new function with the default arguments
// this is a simple example but you can use more compliated examples. 
console.log(double(8))
console.log(triple(5))







