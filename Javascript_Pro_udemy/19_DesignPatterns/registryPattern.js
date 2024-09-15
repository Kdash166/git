class Chicken {
  constructor(id, name, age, breed) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.breed = breed;
  }
}

class ChickenRegistry {
  #chickens = new Map();

  addChicken(chicken) {
    if (!chicken.id) {
      throw new Error("Chicken must have an id");
    }
    this.#chickens.set(chicken.id, chicken);
  }

  getChicken(id) {
    return this.#chickens.get(id);
  }

  removeChicken(id) {
    this.#chickens.delete(id);
  }

  getAllChickens() {
    return [...this.#chickens.values()];
  }
}

const chicken1 = new Chicken(1, "Henrietta", 3, "Silkie");
const chicken2 = new Chicken(2, "Banjo", 3, "Leghorn");

const farm = new ChickenRegistry();
farm.addChicken(chicken1);
farm.addChicken(chicken2);

// Registery pattern //

// this is focused on a centralised manager which stores 
// registers retreives objects and manages data like that
// a registery in this case uses a class which stores the chickens in a map  
//  it also manages the resourse chickens by allowing functionality like deleting 
// remove chickens etc. 

// in the websockets code this was used usign static method rather than register class
// the rooms were either retreived or created. 
