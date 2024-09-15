// class Worker {
//     work() {
//         console.log("working on work!")
//     }
//     eat() {
//         console.log("eating some food!")
//     }
//     sleep() {
//         console.log("taking a nap!")
//     }
// }

// function manageWork(worker) {
//     worker.work();
// }
class Workable {
  work() {
    console.log("working on work!");
  }
}

class Eatable {
  eat() {
    console.log("eating a snack");
  }
}

class Sleepable {
  sleep() {
    console.log("taking a nap");
  }
}

function manageWork(workable) {
  workable.work();
}

// SOLID OOP Project //

// S - Srp single responsibility principle. Your class should handle 
// only one responsibility. It shouldnt handle a whole application. 
// it should only handle the peice of information it needs too. 
//  so you wouldnt have a user that saved info to their data base or doing this and that 
// better to have userDataManager class userPasswordManager newUser

// O - Open/Close Principle

//  you should be able to extend a class without editing its sorce code. 
//  think carefully about using ifElse statements in OOP incase you need to add a new
// usecase or extend a class. You have to modify the code. 
//  it is better to extend the class so you can add another method that handles that shape
// it needs to be open to extention new modules functions classes. 
// not modeifying its sorce code directly. 

//L - liskov substitution principle.

//  A subclass can stand in for its parent class without causing any error. 
// you shouldnt make a class that cannot do the job of its parent.
// anything that is a subclass of bird you should be able te replace these 
// by subclasses of all birds. so you would split flying birds into a class
// and non flying birds into a class. 

// I - Interface Segregation Principle (ISP)

// classes should not be forced implement interfaces the do not use.
//  so you would have lots of methods that are unused in a class 

// D - dependancy inversion Principle

// High Level modules main application logic shouldn't rely on low-level modules
// like spercific liberaries this leads to decoupled and easier to test code. 


// stand alone principle Law of Demeter //

// principle of least knowledge 

// you want modules to only talk to its immediate friends. 
// only use one dot obj.getToy().color
// objects uncesserily reaching through other objects. 
//  A wallet object would just manipulate itself a shop wouldnt reach into 
// your pocket take your wallet take the money out. you would hand over your 
// money and let it be debited. 