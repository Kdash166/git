const ChickenFarm = (() => {
  let instance;
  const createInstance = () => ({ totalChickens: 100 });
  return {
    getInstance: () => {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

class DatabaseConnection {
  constructor() {
    if (!DatabaseConnection.instance) {
      this.connection = this.createConnection(); // assume createConnection establishes a database connection
      DatabaseConnection.instance = this;
      // if it doesnt exists it creates connection to database
    }
    return DatabaseConnection.instance;
    // if the connection already exists the connection is returned. 
  }

  createConnection() {
    // logic to connect to the database
    console.log("CREATING CONNECTION TO DATABASE!!!!");
    return { connection: "I am the database connection object" };
  }

  // Other database-related methods...
}

// singleton pattern //

// this pattern runs one time and it will only create only one instance of 
// an object/class. This means only one instance exists and then a global 
// way to access that. cofiguration files is something that would uses a singleton pattern 
// or database connection. Managing global resources. 
// same concept with a class and an object. Redux store in react acts as a singleton
// node JS module acts like a singleton. 
// describe the shape of an object => instance is only called once => returns access
