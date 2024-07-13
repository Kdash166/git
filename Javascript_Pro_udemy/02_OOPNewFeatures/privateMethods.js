class MyClass {
  #privateMethod() {
    console.log("PRIVATE METHOD CALLED!!!");
  }
  // cannot directly call a private method
// you dont want to delcare a private method twice or 
// declare an empty private method as you would with a private
// field
  publicMethod() {
    this.#privateMethod();
    // other methods in the class can call a private method
    // these work identically to private fields.

  }
}

const myClass = new MyClass();
myClass.publicMethod();
