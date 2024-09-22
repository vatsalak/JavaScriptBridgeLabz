//Generators are a special type of function that can pause and resume execution. They are defined using
// the function* syntax and use the yield keyword to return multiple values over time.
function* generatorFunction(){
    yield 1;
    yield 2;
    yield 3;
}
const generator = generatorFunction();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
// Each yield pauses the function and returns a value.
// next() resumes execution from the last yield.
// Use Cases:

// Generators are useful for managing asynchronous code, lazy evaluation,
// and creating iterable data structures.


