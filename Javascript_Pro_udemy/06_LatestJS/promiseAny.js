const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

Promise.any([
  fetch(`http://nope.nope`),
  fetch(`http://nope.nope`),
  fetch(`http://nope.nope`),
  fetch(`http://nope.nope`),
  fetch(`${BASE_URL}/2`),
  fetch(`${BASE_URL}/3`),
  fetch(`${BASE_URL}/4`),
  fetch(`${BASE_URL}/5`),
  fetch(`${BASE_URL}/6`),
])
  .then((firstToFinish) =>
    console.log("THIS IS THE FIRST RESOLVED VALUE!", firstToFinish)
  )
  .catch((e) => {
    console.log("OH NO, this means some promise was rejected", e);
  });

  // Promise.amy //

  // this takes an iterable of promise objects and when 
  // the first promise resolves it returns a fullfilled promise
  // if all the promises are rejected then it rejects the promise.
  //  it resolves with the first value it is passed it wont fail.

  //this differs from promise.race because
  //  this will reject the promise if the first one fails.
  // this is good if you have 3 webservices as backups and it will access 
  // the first winning promise that is fullfilled this will use the fastest
  // service first. If they all fail then it will return an error.
