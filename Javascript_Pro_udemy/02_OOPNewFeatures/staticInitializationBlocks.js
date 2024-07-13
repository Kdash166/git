class DatabaseConnection {
  static connection;
  static {
    if (process.env.NODE_ENV === "production") {
      this.connection = this.loadProductionConnection();
    } else {
      this.connection = this.loadDevelopmentConnection();
    }
  }
  //this block of code runs once when the class is loading
  // you will use this to perform intiialization of the class
  // somethin that only runs once when the class is intialised.
// this code only runs once and wont initialise when the class is 
instantiated
  static loadProductionConnection() {}
  static loadDevelopmentConnection() {}
}

