const todo = { priority: "LOW", task: "Finish Editing Course" };

// Is priority falsy?  If so, set it to  "MEDIUM"
todo.priority ||= "MEDIUM";

// Logically equivalent to:
// todo.priority || (todo.priority = "MEDIUM");

// logical OR assignment //

// below if the left side is truthy it evaluates to the left side
// but if the lef side is falsey the right side evaluates and sets the 
// the left side to truthy.
// todo.priority || (todo.priority = "MEDIUM");
// however a much shorter way of coding this is 
// todo.priority ||= "MEDIUM"
// logically they work in the same way
// if todo.priority has a value it would evaluate to truthy and 
// would eavalute to whatever that is. 
// this could be good for handling objects from API calls that have missing values
// if you needed them for fruther handling objects
// logical AND assignment //
// let num = 2
// num &&= 1 
// if num is truthy it will be assigned to the right hand side
// so num would equal 1 
// if num is falsy it will evaluate to null
// let num = null
// num&& = 2


