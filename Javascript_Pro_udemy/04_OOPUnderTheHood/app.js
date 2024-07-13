class Dog {
  //console.log("THIS IS", this)
  // this refers to the window not the constructer function
  constructor (name,breed){
    this.name = name;
    this.breed = breed;
  }

  bark = function () {
    return `${this.name} says woof!`;
  };
  sleep = function () {
    return `${this.name} is sleeping!`;
  };
  
}



// const myObj = {
//   color: "purple",
//   score: 99,
//   greet() {
//     console.log("HIII!");
//   },
// };

// class Dog {
//   constructor(name, breed) {
//     this.name = name;
//     this.breed = breed;
//   }
//   bark() {
//     return `${this.name} says woof!`;
//   }
//   sleep() {
//     return `${this.name} is sleeping!`;
//   }
// }

// class GuideDog extends Dog {
//   constructor(name, breed, owner) {
//     super(name, breed);
//     this.owner = owner;
//   }
//   alert() {
//     return `${this.name} alerts you to danger.  Good dog!`;
//   }
// }

// function Dog(name, breed) {
//   this.name = name;
//   this.breed = breed;
//   this.bark = function () {
//     return `${this.name} says woof!`;
//   };
//   this.sleep = function () {
//     return `${this.name} is sleeping!`;
//   };
// }

// function User(username, email) {
//   this.username = username;
//   this.email = email;
//   this.isAdmin = false;
// }

// const grandparent = {
//   greet() {
//     return "HI THERE!!!";
//   },
// };

// const parent = {
//   color: "purple",
//   sing() {
//     return "LA LA LA";
//   },
//   __proto__: grandparent,
// };

// const child = {
//   num: 2,
//   __proto__: parent,
// };

const person = {
  sing() {
    return "LALALA";
  },
  isHuman: true,
};

// JS OO under the hood //

// constructor is syntactic suger on top of prototypes
// and new we havent always had access to constructor

// new keyword //

// you can use new Array and new Object it can instantiate a new class
// before classes we wrote constructor functions but these are different from
// the constructor method. 
// if you run the above dog function with new infront of it it works! 
// because it creates an empty object called dog and this now refers to 
// that object. when you use the new keyword it automatically returns that 
// object calling dog by itself doesnt do anything and this refers to the window
//  if new is used the new object is returned and this is no refers to that object
// just a word on this this is essential whether using constructor functions or 
// classes.

//  summery of what new does

// - Creates an empty object
// - sets the keyword this to be that object
// - Returns the this object
// - creates a link to the objects prototype

function User(username, email) {
  this.username = username;
  this.email = email;
  this.admin = false;
}
//  above you can see a constructo function above which constructs objects like 
// a class and below you can see methods assigned to the prototypes. 
// this is what was done before javascript included classes and it is fairly 
// confuing because the functionality and the object are declared in tow different 
// places. People do still do this! but classes are much easier!
User.prototype.greeting = function () {
  return `Hello ${this.username}!`;
};

User.prototype.currentEmail = function () {
  return `Hello ${this.username}, your current email is ${this.email} .`;

};
// 
// prototypes //

//  one of the main problems with intantiating a new class every time
// is the methods in theory would be repeated hundreds or thousands of time
// this is inefficient on resources. to have seperate unique functions 
// stored on each object. 
// if you compare two functions elton.bark === wyatt.bark is equal to false. 
// but they do share the same reference to each function in memory. 
//  that only works when using class but how would you do that using a constructor function. 
// why does an object literal have access to all different methods? __getSetter__ etc
//  every javascript object has its own prototype
// in chrome by typing in myObj.__proto__ (this isn't consistent in all browsers)
// every object has an underlying prototype
// for example pepper.__proto__ === elton.__proto__ this evauluates to true 
// because the prototype object for all objects is the same.
// when I use a class and create methods javascript simply adds them to the 
// prototype for us.
//  for example you could have 10,000 instances of dog --> they all use the same 
// bark() and sleep() methods that are defined on the prototype object. shared functionality
// lives on the prototype. 
// if you define a method on the prototype every instantiation of the class will 
// have that function on a prototype. 
// a constructor function will create an object that contains a constructor 
//  this constructor can be used new elton.constructor("Bilbo","pug") would 
// instantiate a new Dog called blibo in this case. constructor just references
// the constructor function.

// prototype chain//

// javascript will look first in the object and then in the parent object for 
//  a method the prototype is a special link it will look in parents and grand
// parents. all the way back to the basic object prototype. 
// this is how objcts are chained together. 


// classes, inheritence & prototypes//

// when defining a class the methods are added to the protoype automatically, 
// unlike in the constructor function. 
// classes act as syntactic sugar essentially. 
class GuideDog extends Dog {
  constructor(name,breed,owner) {
    super(name, breed)
    this.owner = owner;
  }
  
  alert(){
    return `${this.name} alerts you to danger. Good dog!`;
  }
}

// all guide dog is here is a chain of prototypes the GuideDog Dog and 
// basic object are all chained together. this is like the parent grandparent
// inheritence that can be seen above.
// by using the key word extends you are setting up a prototype chain. 
//  exactly the same mechanism is at work here all it does is check for the method
// moving through the prototype chain if it cant find it it returns it 
// as undefined error if it can it uses that method.
// prototypes are all just objects where shared functionality lives

// __proto__ and prototype difference //
//  prototype. is used exlcusively for adding methods to the prototype of 
// a class so all instances can use it. 

// __proto__ // is used by javascript it is an interanl property that every
// object has and it points to its prototype. we dont add things to __proto__
// if we were going to add something to it we use prototype. 

// useful prototype methods //

const tom = Object.create(person)
tom.firstName = "tom"
console.log(tom)
console.log(tom.sing())

// this is an emty object but its prototype is the person object
//  you can see this because it has access to sing

console.log(Object.getPrototypeOf(tom))
// gets the prototype of an object
// this gives us the person object 
console.log(Object.getPrototypeOf(person))
// this gives us the base object prototype
console.log(Object.getPrototypeOf(Object))
// native code that cannot be displayed in javascript C++ code obscured
console.log(Object.setPrototypeOf(tom, {isHuman:false}))
// these are all methods on tom. 
// sets the prototype of an object

const ling = Object.create(person)
// makes an empty object and takes an object as its argument for a prototype. 

ling.firstName = "ling";
console.log(ling)

