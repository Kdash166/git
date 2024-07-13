class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  set fullName(newName) {
    const [first, last] = newName.split(" ");
    this.firstName = first;
    this.lastName = last;
  }
}

const user1 = new User('Kieran', 'Buckley')

console.log(user1.fullName);
console.log(user1.firstName);
console.log(user1.lastName);

// getters and setters are intended to be used on the 
// instance of the class not the class itself. 
// they are methods that can be used to do some work 
//  on related topics suchs as farenheiht and celcius conversion

class Temperature {
  constructor(degrees, measurement) {

    if (typeof degrees !== 'number' || isNaN(degrees)) {
      throw new Error("Degrees must be a valid number");
    }

    if (measurement !== 'Celsius' && measurement !== 'Fahrenheit') {
      throw new Error("Measurement must be either 'Celsius' or 'Fahrenheit'");
    }

    this.degrees = degrees;
    this.measurement = measurement;
  }

  get currentTemp() {
    return `${this.degrees} ${this.measurement}`;
  }

  set currentTemp(convertTemp) {
    const [deg, mes] = convertTemp.split(" ");
this.degrees = deg;
this.measurement = mes;
    
      }
    
  }


const temp1 = new Temperature(-95, 'Fahrenheit');

console.log(temp1.currentTemp); // Outputs: 95 Fahrenheit

temp1.currentTemp = '35 Celsius';

console.log(temp1.currentTemp);
console.log(temp1.degrees);
console.log(temp1.measurement);