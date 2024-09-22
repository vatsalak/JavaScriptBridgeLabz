//bind()
//The bind() method creates a new function that, when called, 
//has its this keyword set to the specified value, along with a
// given sequence of arguments. Unlike call() and apply(), bind() does 
//not immediately execute the function.

//Example:


function greet(greeting, punctuation) {
    console.log(`${greeting}, my name is ${this.name}${punctuation}`);
}

const person = { name: "Alice" };
const boundGreet = greet.bind(person, "Hello");
boundGreet("!"); // Hello, my name is Alice!
Explanation:

//bind() creates a new function boundGreet with this set to person and pre-sets the greeting argument to "Hello".
//This is useful for creating copies of functions with pre-set this values and arguments.