function* evens(n) {
  while (true) {
    yield n;
    n += 2;
  }
}

function* myCats() {
  yield "Blue";
  yield "Kitty";
  yield "Cream";
  yield "Creedence";
}

function* fibonacci() {
  let a = 0,
    b = 1;

  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
  // this would cause an infinate loop if it wasnt in a generator function
  // you can keep calling a generator function 
  // you can uses a for loop to iterate over these functions as well for 
  // a set amount of times.
  // you can see this below
}

const fibGen = fibonacci();

for (let i = 0; i < 20; i++) {
  console.log(fibGen.next().value);
}

//  generator functions //

// generator functions allow for a function to pause and resume 
// as needed 
// this creates a generator object and uses the following syntax 
// function* and yeald instead of return as can be seen above. 
// it allows for an ifinate sequence and you can run it without encountering errors
// this allows you to use the .next syntax this will go again and again when you 
// use .next.