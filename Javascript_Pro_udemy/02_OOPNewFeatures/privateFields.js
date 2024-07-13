class Circle {
  #radius;
  constructor(radius) {
    this.#radius = radius;
  }
  getRadius() {
    return this.#radius;
  }
}

const myCircle = new Circle(10);

console.log(myCircle.getRadius())
// you have to use a fixed method to access a private class

// console.log(myCircle.#radius) //
// the above doesnt  and shouldnt work  as the object is 
// being accessed outside of the class.
//  chrome dev tools will allow you to access myCircle.#radius
// for debugging purposes. 



// private classes prevent access from other developers and 
// your own code base - they do not incrypt anything!
// _radius is to tell other developers not to touch it.
//  it doesnt actually stop them it is just an indicater. 
// dont manipulate it outside the class.
// private classes could be used for contstants like damage multipliers 
// or mathmatical formula. 
