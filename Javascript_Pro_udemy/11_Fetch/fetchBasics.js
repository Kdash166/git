const POKE_URL = "https://pokeapi.co/api/v2/pokemon";

async function getPokemon() {
  const response = await fetch(POKE_URL);
  const data = await response.json();
  console.log(data);
}

// fetch(POKE_URL)
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// you can chain things on like above but most people prefer async and await.

// fetch //
//  is an API and it is a modern way to make network requests
// fetch retreives data as a readable stream of the body contents. 
// we need to call a method to read the stream and pasrse the information. 
// this is .json(). 

//  this is a twotep process 1.get the information 2. parse the information (.json).

// 
