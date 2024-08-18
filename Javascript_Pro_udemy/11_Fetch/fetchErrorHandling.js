const POKE_URL = "https://pokeapi.co/api/v2/pokemon/asdasd/asd";

async function getPokemon() {
  try {
    const response = await fetch(POKE_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.log("SOMETHING WENT WRONG WITH THE FETCH CALL!");
    console.log(e);
  }
}
// the above method is preferred as it is less confusing

// below does work but is  

// fetch(POKE_URL)
//   .then((res) => {
//     console.log("THE FETCH WORKED!!!!");
//     console.log(res);
//     if (!res.ok) {
//       throw new Error(`HTTP error! Status: ${res.status}`);
//     }
//     return res.json();
//   })
//   .then((data) => console.log("JSON DATA", data))
//   .catch((e) => {
//     console.log("SOMETHING WENT WRONG WITH THE FETCH CALL!");
//     console.log(e);
//   });

// Error Handling //

// fetch does not reject the promise if their is a 404 or other error returned. 
// fetch will only reject a promise if their is a network error 
// or cors server error. 
// if(!response.ok) handles this. the fetch and promise still work 
// but it returns false if you get a 400 network response  but true if you get
//  a 200 url found return.
// you cannot rely soley on the return fetch you need to use .ok aswall.