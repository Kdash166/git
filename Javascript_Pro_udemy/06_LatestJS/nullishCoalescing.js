// Function that generates a random user
function getUser() {
  // Helper function to generate a random number
  const getRandomNumber = (max) => Math.floor(Math.random() * max);

  // Possible user data
  const firstNames = ["John", "Raj", "Dave", "Sarah", "Rosa", "Esteban"];
  const lastNames = ["Hamilton", "Norris", "Bottas", "Tsunoda", "Sainz"];
  const emails = ["example.com", null, "sample.com", undefined, "demo.com"];
  const includeAddress = [true, false]; // Array to determine if address should be included

  const includeMethod = [true, false]; // Array to determine if method should be included

  // Randomly pick data or leave it undefined
  const firstName = firstNames[getRandomNumber(firstNames.length)];
  const lastName = lastNames[getRandomNumber(lastNames.length)];
  const emailDomain = emails[getRandomNumber(emails.length)];
  const age = getRandomNumber(4);
  const shouldIncludeMethod =
    includeMethod[getRandomNumber(includeMethod.length)];
  const shouldIncludeAddress =
    includeAddress[getRandomNumber(includeAddress.length)];

  // Construct a user object, email might be non-existent due to undefined emailDomain
  const user = {
    email: emailDomain
      ? `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${emailDomain}`
      : undefined,
    age: Math.random() > 0.5 ? age : null, // age will always exist, just for the sake of structure
  };
  if (Math.random() > 0.5) {
    user.name = {
      first: firstName,
      last: lastName,
    };
  }

  if (shouldIncludeAddress) {
    user.address = {
      street: "1234 Elm St",
      city: "Anytown",
      state: "CA",
      country: "USA",
      postalCode: "12345",
      coordinates: {
        lat: null, // let's assume the latitude is not available
        long: 35.12345, // longitude is available
      },
    };
  }

  // Sometimes include a method
  if (shouldIncludeMethod) {
    user.greet = function () {
      console.log(`HELLO THERE! I AM A USER!!!`);
    };
  }

  return user;
}

const user = getUser();
console.log(user);

const age = user?.age ?? "IDK THE AGE";
console.log("AGE IS ", age);

// Nullish coelescing operator //

// this allows the return of the left hand side value even when it is false or falsey

// 0 ?? "hello"

//  will evaluate to 0 

//  using the || method  this would evaluate to "hello" because zero is falsey

//  the only values using the Nullish Coelescing operator that return the right hand side is 
// null or undefined for example:

// null ?? "default" would return "default"
//  0 // "defualt" would return 0

//  by using the || method you would be disgarding 0 but 0 is a valid age temperature value, you might not want to do that, 
// this is where the Nullish Coelescing operator comes in handy.
//  these would both have different usecases
//  you can use this with optional chaining as well which is convenient.

// numeric seperators //

// numbers can be seperated by seperators this helps to make the numbers more readable but doesnt effec them in any way 

let num = 800_000_000 

if ( num === 800000000){
  console.log("true")
}

// .at() //

// this allows us to use a negative value to read from the back of the array
colors = ["red","white","blue","green","brown"]

//  you most likely wouldn't use this for this purpose
colors.at(0)
//  we can already do this simply
colors[0]

// where.at is really useful is shortening code like this 
// before
colors[colors.length - 1]
// after
colors.at(-1)
// in other programming languages you can use 
colors[-1] 
// but in JS this returns to undefined

// .replaceAll()//

// str.replace("cat", "dog") only replaces the first word in a string you could use a workround with regular expression but it isnt needed anymore
// it takes a value to replace and what to replace it with. 
const str = "I love cats, cats love me, me and the cats are happy as can be!"

console.log(str.replace("cats","dogs"))

console.log(str.replaceAll("cats","dogs"))
// you can still use regular expressions with replace all incase you wanted to do something with casing eg CaT CAT cAt
//  you must use the golbal flag otherwise the 
