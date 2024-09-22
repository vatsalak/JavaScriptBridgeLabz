//The apply() method is similar to call(), but it takes arguments as an array instead of individual values.
function greet(greeting, punctuation) {
    console.log(`${greeting}, my name is ${this.name}${punctuation}`);
}

const person = { name: "Alice" };
greet.apply(person, ["Hello", "!"]); // Hello, my name is Alice!
//apply() is useful when you have an array of arguments to pass to a function.