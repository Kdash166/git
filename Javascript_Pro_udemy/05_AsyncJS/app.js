const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
const url = `${BASE_URL}/1`;

// fetch(`${BASE_URL}/1`)
//   .then((res1) => {
//     console.log("RESPONSE 1 ", res1);
//     fetch(`${BASE_URL}/2`)
//       .then((res2) => {
//         console.log("RESPONSE 2", res2);
//         fetch(`${BASE_URL}/3`)
//           .then((res3) => {
//             console.log("RESPONSE 3", res3);
//             fetch(`${BASE_URL}/4`)
//               .then((res4) => {
//                 console.log("RESPONSE 4", res4);
//               })
//               .catch((err) => console.log("ERR!", err));
//           })
//           .catch((err) => console.log("ERR!", err));
//       })
//       .catch((err) => console.log("ERR!", err));
//   })
//   .catch((err) => console.log("ERR!", err));

// fetch(`${BASE_URL}/1`)
//   .then((res1) => {
//     console.log("RESPONSE 1 ", res1);
//     return fetch(`${BASE_URL}/2`);
//   })
//   .then((res2) => {
//     console.log("RESPONSE 2 ", res2);
//     return fetch(`http://nope.nope`);
//   })
//   .then((res3) => {
//     console.log("RESPONSE 3 ", res3);
//     return fetch(`${BASE_URL}/4`);
//   })
//   .then((res4) => {
//     console.log("RESPONSE 4 ", res4);
//   })
//   .catch((err) => {
//     console.log("IN THE CATCH! Error: ", err);
//   });

// Make request to pokemon/1
// then make request to pokemon/2
// then make request to pokemon/3
// then make request to pokemon/4

// async function getFirstPokemon() {
//   const result = await fetch(`${BASE_URL}/1`);
//   console.log(result);
// }

// async function getFirstPokemon() {
//   const result = await fetch(`${BASE_URL}/1`);
//   console.log(result);
// }

// async function getFourPokemon() {
//   try {
//     const res1 = await fetch(`${BASE_URL}/1`);
//     console.log(res1);

//     const res2 = await fetch(`${BASE_URL}/2`);
//     console.log(res2);

//     const res3 = await fetch(`http://nope.nope`);
//     console.log(res3);

//     const res4 = await fetch(`${BASE_URL}/4`);
//     console.log(res4);
//   } catch (e) {
//     console.log("FETCH WENT WRONG!");
//     console.log(e);
//   }
// }

// async function fetchFakeWebsite() {
//   try {
//     const res1 = await fetch(`http://nope.nope`);
//     console.log(res1);
//   } catch (e) {
//     console.log("SOMETHING WENT WRONG...");
//     console.log(e);
//   }
// }

// const results = [];
// fetch(`${BASE_URL}/1`).then((res) => {
//   results.push(res);
//   console.log("REQUEST 1 FINISHED!");
// });

// fetch(`${BASE_URL}/2`).then((res) => {
//   results.push(res);
//   console.log("REQUEST 2 FINISHED!");
// });

// fetch(`${BASE_URL}/3`).then((res) => {
//   results.push(res);
//   console.log("REQUEST 3 FINISHED!");
// });

// console.log("WAITING FOR REQUESTS TO COMPLETE");

// const results = [];
// async function getPokemon1() {
//   const res = await fetch(`${BASE_URL}/1`);
//   results.push(res);
//   console.log("REQUEST 1 FINISHED!");
// }

// async function getPokemon2() {
//   const res = await fetch(`${BASE_URL}/2`);
//   results.push(res);
//   console.log("REQUEST 2 FINISHED!");
// }

// async function getPokemon3() {
//   const res = await fetch(`${BASE_URL}/3`);
//   results.push(res);
//   console.log("REQUEST 3 FINISHED!");
// }

// getPokemon1();
// getPokemon2();
// getPokemon3();

// console.log("WAITING FOR REQUESTS TO COMPLETE");

// const results = [];
// async function getPokemon(num) {
//   const res = await fetch(`${BASE_URL}/${num}`);
//   results.push(res);
//   console.log(`REQUEST ${num} FINISHED!`);
// }

// getPokemon(1);
// getPokemon(2);
// getPokemon(3);

// const lotsOfFetchCalls = [
//   fetch(`${BASE_URL}/1`),
//   fetch(`${BASE_URL}/2`),
//   fetch(`${BASE_URL}/3`),
//   fetch(`${BASE_URL}/4`),
//   fetch(`${BASE_URL}/5`),
//   fetch(`${BASE_URL}/6`),
// ];

// Promise.all(lotsOfFetchCalls)
//   .then((results) => {
//     console.log("Promise.all() is done and resolved!");
//     console.log(results);
//   })
//   .catch((e) => {
//     console.log("ONE of the promises was rejected");
//     console.log(e);
//   });

// async function getLotsOfPokemon() {
//   try {
//     const results = await Promise.all(lotsOfFetchCalls);
//     console.log("Promise.all() is done and resolved!");
//     console.log(results);
//   } catch (e) {
//     console.log("ONE of the promises was rejected");
//     console.log(e);
//   }
// }

// async function allSettledDemo() {
//   const GITHUB_BASE_URL = "https://api.github.com";

//   let elieP = fetch(`${GITHUB_BASE_URL}/users/elie`);

//   let joelP = fetch(`${GITHUB_BASE_URL}/users/joelburton`);

//   let badUrl = fetch("http://definitelynotarealsite.com");

//   let coltP = fetch(`${GITHUB_BASE_URL}/users/colt`);

//   let anotherbadUrl = fetch("http://definitelynotarealsite.com");

//   let results = await Promise.allSettled([
//     elieP,
//     joelP,
//     badUrl,
//     coltP,
//     anotherbadUrl,
//   ]);

//   console.log(results);
//   const fulfilled = results.filter((r) => r.status === "fulfilled");
//   const rejected = results.filter((r) => r.status === "rejected");
//   console.log(fulfilled);
//   console.log(rejected);
// }

// const lotsOfFetchCalls = [
//   fetch(`http://nope.nope`),
//   fetch(`${BASE_URL}/2`),
//   fetch(`${BASE_URL}/3`),
//   fetch(`${BASE_URL}/4`),
//   fetch(`${BASE_URL}/5`),
//   fetch(`${BASE_URL}/6`),
// ];

// Promise.race(lotsOfFetchCalls)
//   .then((winner) => {
//     console.log(winner);
//   })
//   .catch((err) => console.log(err));

// function wait(duration) {
//   const p = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve("this is the resolved value!");
//     }, duration);
//   });
//   return p;
// }

// function randomRejectResolve() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       const rand = Math.random();
//       if (rand < 0.5) {
//         resolve("Pickles");
//       } else {
//         reject("Error!!!!!");
//       }
//     }, 2000);
//   });
// }

// async function demo() {
//   console.log("hi");
//   const val = await wait(2000);
//   console.log("there");
//   console.log(val);
// }

// wait(5000).then((val) => console.log(val));

// randomRejectResolve()
//   .then((val) => {
//     console.log("INSIDE first .then() callback ", val);
//     return randomRejectResolve();
//   })
//   .then((val) => {
//     console.log("INSIDE 2nd .then() callback ", val);
//     return randomRejectResolve();
//   })
//   .then((val) => {
//     console.log("INSIDE 3rd .then() callback ", val);
//   })
//   .catch((e) => console.log("INSIDE CATCH", e));

// Callbacks //

// a callback function is simply a function that 
// we passed to another function this is used alot in 
// javascritpt.
// lots of functional programming methods and lots of of array methods
//  for each filter map reduce 
// event driven programming on submit send data to server for example
//  or onclick on the button for example 
// set time set interval also expect a callback function
//  we used to use  callbacks when we used aysnchronous operations

// callbacks for Asynchronocity //

// JS is a single coded language it can only run one peice of code at a time
//  but it doesnt wait for it to get a response back it responds to events
// repaint dom changes it goes off and does these things until 
// async code returns. we need to use promise async and await to free javascript
// up to do other things listening for events etc. 
//  so we used to provide a callback function but these could get big complicated
// this was called callback hell or the pyramid of doom due to nesting callback functions. 
// this had to be used for xhr1 in older times again needed error handling nested
// callbacks these were nightmares. 
//   we no longer need to use callbacks we now promises. 
// the reason we needed to use them is due to JSs single threaded nature
// we need to allow JS to get on with other things. 

// promises //

// promises are a way to write async code and they were introduced in ES6
// ES 2015 promises are promises of a future value. they reprosent either a value
// or an error. They are important in all Javascript enviroments
// fetch(url)
// promise(<pending>)
// promises are objects that are returned they are the future completion of 
// a certain function.
// promises have three main states
// pending - it doesnt have a value yet
// resolved - it has obtained a value
// rejected - it failed to obtain a value for some reason
// as soon as the fetch call is made the promise object starts as pending
// this is the promise objects default state
// if your internet is down then the pending state will be rejected.
// it cannot validate the promise for a fetch call as it cannot get data from 
// the API

// .then() and .catch()//
// .then() only runs when the callback has been resolved. 
// .catch()is a method that runs if the promise is rejected. 
// this will give us information about the error. 
// this is like if the promise is fullfilled then else catch
// they both accept callback functions arrow functions are accepted.

// chaining promises to flatten code //

// you can chain on .thens() in a flat way take a look at the examples above
// when chaining promises the first one runs then the second one then the third
// return a promise form a .then call back 
// you can actually just use a .catch at the end AND IT wil pick up on the error 
//  and return it to you if any promises fail. the catch call back 
// runs for any rejected promises in the chain.

// async //

//  you can declare NY FUNCTION AS A ASYNC FUNCTION
//  async functions AlWAYS return promises 
//  we dont have to use .then or catch, you can but we dont 
// have to we actually can use syncenous code but we use the key word await
// fetch retunrs a promise in an asyc function I can just await 
// async means no call back runs flat no . then no call back 

//  if you forget to async your function and await the promise is returned 
// as a pending promise rather than resolving. 
// you have to use async and await together. 
// you can await as many things as you need to. just like you can chain 
// .fetch calls together. async and await is still based on promises. 
// it is just syntactic sugar. The same things are happening behind the scenes. 
// it is good because it reduced the need for callback functions in fetch and then. 
// await pauses the execution of the function not javascript.
//  how do you handle errors in async functions? you can use try catch
// you can use try and catch in the same way as fetch catch if your making multiple 
// fetches.

// .then/.catch vs async/await //

// - they do the same thing under the hood they run code when a promise object is resolved
// - they have different syntax 
// - code for async and await is more natural it can be written without callbacks 
// it looks more natural.
// - you still need to underestand what a promise is how .then and catch work 
//  and when a promise is rejected pending or resolved. 

// parallel promise return pattern//
//  you can send reqquests independently but if you di this with multiple 
// requests you cannot gaurentee when they will be called back. 
// you could write these as async and await functions or you can write these as 
// using fetch then and catch. if you dont care about what results return and when. 
//  this is called a paralell return pattern because the return could be in any order

// const results = [];
// async function getPokemon1() {
//   const res = await fetch(`${BASE_URL}/1`);
//   results.push(res);
//   console.log("REQUEST 1 FINISHED!");
// }

// async function getPokemon2() {
//   const res = await fetch(`${BASE_URL}/2`);
//   results.push(res);
//   console.log("REQUEST 2 FINISHED!");
// }

// async function getPokemon3() {
//   const res = await fetch(`${BASE_URL}/3`);
//   results.push(res);
//   console.log("REQUEST 3 FINISHED!");
// }

// series return pattern //

// some things have to happen in series we create a chain of promises. 
// these will always return in order. this is important if you need things 
// to happen in order.

// const results = [];
// fetch(`${BASE_URL}/1`)
//   .then((res) => {
//     results.push(res);
//     console.log("REQUEST 1 FINISHED!");
//     return fetch(`${BASE_URL}/2`);
//   })
//   .then((res) => {
//     results.push(res);
//     console.log("REQUEST 2 FINISHED!");
//     return fetch(`${BASE_URL}/3`);
//   })
//   .then((res) => {
//     results.push(res);
//     console.log("REQUEST 3 FINISHED!");
//   });

// this chains promises together. 

// promise all //

// const lotsOfFetchCalls = [
//     fetch(`${BASE_URL}/1`),
//     fetch(`${BASE_URL}/2`),
//     fetch(`${BASE_URL}/3`),
//     fetch(`${BASE_URL}/4`),
//     fetch(`${BASE_URL}/5`),
//     fetch(`${BASE_URL}/6`),
//   ];
  
  // Promise.all(lotsOfFetchCalls)
  //   .then((results) => {
  //     console.log("Promise.all() is done and resolved!");
  //     console.log(results);
  //   })
  //   .catch((e) => {
  //     console.log("ONE of the promises was rejected");
  //     console.log(e);
  //   });
  
//   async function getLotsOfPokemon() {
//     try {
//       const results = await Promise.all(lotsOfFetchCalls);
//       console.log("Promise.all() is done and resolved!");
//       console.log(results);
//     } catch (e) {
//       console.log("ONE of the promises was rejected");
//       console.log(e);
//     }
//   }
  

// promise all returns a new promise if all the promises 
// have been returned in the array. 
// if one of the promises in the array rejects
//  promise all returns a rejected promise which is essentially 
// returns an array of all the promises. 
//  you can do this with an async/await or .then/.catch

// promise.allSettled //

// this takes an array of promises and it will return
// even if some or all of the promises are rejected. 
// async function allSettledDemo() {
  const GITHUB_BASE_URL = "https://api.github.com";

  let elieP = fetch(`${GITHUB_BASE_URL}/users/elie`);

  let joelP = fetch(`${GITHUB_BASE_URL}/users/joelburton`);

  let badUrl = fetch("http://definitelynotarealsite.com");

  let coltP = fetch(`${GITHUB_BASE_URL}/users/colt`);

  let anotherbadUrl = fetch("http://definitelynotarealsite.com");

  let results = await Promise.allSettled([
    elieP,
    joelP,
    badUrl,
    coltP,
    anotherbadUrl,
  ]);

  console.log(results);
  const fulfilled = results.filter((r) => r.status === "fulfilled");
  const rejected = results.filter((r) => r.status === "rejected");
  console.log(fulfilled);
  console.log(rejected);

//  this makes a series of fetch calls for URLs 
// it then awaits the promies to be all settled. 
// it then filters the results into fullfilled and rejected

// promise.race //

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

const lotsOfFetchCalls = [
  fetch(`http://nope.nope`),
  fetch(`${BASE_URL}/2`),
  fetch(`${BASE_URL}/3`),
  fetch(`${BASE_URL}/4`),
  fetch(`${BASE_URL}/5`),
  fetch(`${BASE_URL}/6`),
];

Promise.race(lotsOfFetchCalls)
  .then((winner) => {
    console.log(winner);
  })
  .catch((err) => console.log(err));

// promise.race resolves when the first promise is resolved 
// or rejected both are the winner in this situation. 
//  the winner is simply the fastest fetch. 

// Building Own Promises //

function wait(duration) {
    const p = new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve("this is the resolved value!");
      }, duration);
    });
    return p;
  }
  
  function randomRejectResolve() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        const rand = Math.random();
        if (rand < 0.5) {
          resolve("Pickles");
        } else {
          reject("Error!!!!!");
        }
      }, 2000);
    });
  }
  
  async function demo() {
    console.log("hi");
    const val = await wait(2000);
    console.log("there");
    console.log(val);
  }
  
  // wait(5000).then((val) => console.log(val));
  
  randomRejectResolve()
    .then((val) => {
      console.log("INSIDE first .then() callback ", val);
      return randomRejectResolve();
    })
    .then((val) => {
      console.log("INSIDE 2nd .then() callback ", val);
      return randomRejectResolve();
    })
    .then((val) => {
      console.log("INSIDE 3rd .then() callback ", val);
    })
    .catch((e) => console.log("INSIDE CATCH", e));

    // you can build your own promise like object 
    // the promise object accepts a function which accepts resolve and reject as 
    // parameters. 
    // if the custom promise is resolved the resolved code will run
    // if the reject custom promise runs then the reject code will run


