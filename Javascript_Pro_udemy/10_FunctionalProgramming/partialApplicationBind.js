function greet(greeting, name) {
  console.log(`${greeting}, ${name}!!!`);
}

const aussieGreet = greet.bind(null, "G'day");

const spitefulGreet = greet.bind(null, "I hate you");

// bind to create partial application //

//  you can use bind or a special helper fucntion to help 
// bake arguments into a function.