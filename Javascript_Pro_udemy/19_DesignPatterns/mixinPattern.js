const fly = {
  fly() {
    return `${this.name} flies!!!`;
  },
  land() {
    return `${this.name}, the ${this.species}, returns to earth`;
  },
};

const swim = {
  swim() {
    return `${this.name} swims underwater! Wow!`;
  },
};
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
  greet() {
    return `${this.name} says hi`;
  }
}

const bernie = new Animal("Bernie", "Pelican");
Object.assign(bernie, fly);
Object.assign(bernie, swim);



// mix in //

// this is an object where methods are assigned to objects
// this is useful when you dont want to build an object 
// with properties it doesnt have. 
// you can add these in whenever you need this keeps objects clean 
// methods that shouldn't exist dont. 
