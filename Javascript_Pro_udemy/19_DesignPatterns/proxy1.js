const cat = {
  name: "Blue Steele",
  age: 7,
  breed: "Scottish Fold",
};

const handler = {
  get: function (obj, property) {
    console.log(`Accessing ${property} from object`);
    return obj[property];
  },
  set: function (obj, property, value) {
    if (property === "age") {
      if (value < 0) {
        obj[property] = 0;
      } else {
        obj[property] = value;
      }
    }
  },
};
const catProxy = new Proxy(cat, handler);

// proxy Pattern //

// proxy naturally exist in javascript using the proxy ket word
// these are proxy objects they act as a middle man
// if you call new proxy it accepts arguments
// it governs how we can interact with the orginal cat object
// we can use different hooks actions when someone tries to retreive or set a property. 
// there are get and set and alot of different properties that can be assigned to the handler 
// any time you try to get a property it will console.log the property that is being accessed
// before revieling the propety but you can also set it so it doesnt to that. 
// these properties are aslo know as traps. because as you do an action on an object 
// these traps are automatically triggered. 
// this can be used for validation so it will only accept a vlid age date. etc. 

// Vue.js proxy //

// A common real-life use of Proxy is in frameworks like Vue.js, where it is used to create reactive objects
//  that automatically update the UI when the data changes. The Proxy allows Vue to track 
// changes to data properties and trigger updates to the DOM without the developer needing 
// to manually manage this process.