class Cat {
  static numOfCats = 0;
  // this is stored on the class
  name;
  breed;
  numLegs = 4;
  hasTail = true;
  status = "alive";
  // these are all public fields
  // class fields clean up your constructor
  // this acts as a list of properties all in one place 
  // doesnt matter if it is repeated in the constructor eg name

  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    Cat.numOfCats += 1;
    // everytime a cat is instatiated const blue = new Cat("blue");
    // the cat class property is updated to give you a count
  // this could be useful if you want to count how many times an class has been instantiated. 
  //  you could number items in an RPG like this or keep an total number of products etc this way.

  }
  amputate() {
    this.numLegs -= 1;
  }
  euthanise(){
    this.status = "dead";
    // this essential means the the instance is completely gone. 
    // it allows you to delete an instance

  Cat.numOfCats -= 1;
  }
}

const blue = new Cat("blue");
const helen = new Cat("helen");
const scratchy = new Cat("scratchy");

console.log(Cat.numOfCats)

