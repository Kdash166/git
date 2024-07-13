class Circle {
  static allowedColors = new Set(["red", "green", "blue"]);

  constructor(radius, color) {
    this._radius = radius;
    this.setColor(color);
  }

  setColor(newColor) {
    if (Circle.allowedColors.has(newColor)) {
      this._color = newColor;
    } else {
      throw new Error("That color is not allowed");
    }
  }

  get radius() {
    return this._radius;
  }

  // Setter for the radius
  set radius(value) {
    if (value < 0) {
      throw new Error("Radius cannot be negative!");
    } else {
      this._radius = value;
    }
  }

  get color() {
    return this._color;
  }

  set color(newColor) {
    this.setColor(newColor);
  }
}
// <!-- getters -->
//     <!-- a getter  allows us to create a method and call it
//     using dot notation IE circle.diameter where diameter 
// is a method that performs some logic this is useful for diameter due to 
// when you want similar properties just to update that are reliant on each other
// tax on monetary items if it is set at 20% total tax is a good idea to be a getter
// getter look like a property but runs like a function see circle.js _radius the
// underscore suggests to other programs not to change this outside of the object
// it is private or internal to the instance of a class -->

// <!-- setters use the set key word allows us to update a property 
//  the underscore is an indication that other programmers should use the getter and setter
// functions to update tax or radius for example a setter can be used to check values 

// Sets can be used to compare colours in circles.js file sets accept data but it must be unique
// setters cannot be called from its own class they are designed to be called 
// after a class has been initialised-->
