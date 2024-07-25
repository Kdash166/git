// Function that generates a random user
// IGNORE THIS CODE, THE RELEVANT CODE IS AT THE BOTTOM OF THE FILE
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
  const age = getRandomNumber(100);
  const shouldIncludeMethod =
    includeMethod[getRandomNumber(includeMethod.length)];
  const shouldIncludeAddress =
    includeAddress[getRandomNumber(includeAddress.length)];

  // Construct a user object, email might be non-existent due to undefined emailDomain
  const user = {
    email: emailDomain
      ? `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${emailDomain}`
      : undefined,
    age: age, // age will always exist, just for the sake of structure
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
// const firstName = user.name.first;

// const firstName = user && user.name && user.name.first;
const firstName = user?.name?.first;

// const long = user && user.address && user.address.coordinates && user.address.coordinates.long
const long = user?.address?.coordinates?.long;
console.log("First name: ", firstName);
console.log("Longitude: ", long);

user.greet?.();

//  optional chaining //

// allows you to reference deep within a chain of connected objects without having to check for each reference in a chain
// for example  here is the traditional way of checking for a value

// const user = user && user.name  && user.name.first

// the problem with this form of chaining can become extremely long in a chain of nested objects
//  optional chaining makes the code easier to write and understand:

//  const user = user?.name?.first

//  you can also use optional chaining to call a method on an object

// user.greet?.()

// if this doesn't exist it returns undefined rather than " greet is not a function"

// in summery otpional chaining is used to see if a chain of properties excist.