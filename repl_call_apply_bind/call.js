//The call() method allows you to call a function with a specified this value and individual 
//arguments. 
//It's useful for borrowing methods from one object and using them with another.
function greet(greeting,punctuation) {
    console.log(`${greeting},my name is ${this.name}${punctuation}`);
    
}
const person = { name: "Alice" };
greet.call(person, "Hello", "!"); // Hello, my name is Alice
// Explanation:

// call() sets this to person and passes the arguments "Hello" and "!" to the greet function.