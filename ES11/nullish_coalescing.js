//Nullish coalescing operator ??
//In js, when encountering 0, null, and undefubed, 
//it will be automatically converted to false
//But sometimes 0 is actually a normal value, 
//and can only be fault-tolerant to undefinedand null

//In JavaScript, when using the logical OR (||) operator as a fallback mechanism, any falsy value (like 0, false, "", NaN, null, or undefined) will cause the fallback value to be used. This can lead to
// unintended behavior when 0 or false are considered valid values.
const value = 0; // 0 is a valid value we want to keep
const result = value || 10; // Using || for default value
console.log(result); // 10, but we expected 0
//Solution with Nullish Coalescing (??)
//The nullish coalescing operator (??) only considers null and 
//undefined as nullish values, and it won't treat other falsy
// values like 0, false, or "" as nullish. This makes it ideal
// when you want to provide a default value only if the variable is null or
// undefined.

//Example with ??:
const value1 = 0; // 0 is a valid value we want to keep
const result1 = value1 ?? 10; // Using ?? for default value
console.log(result1); // 0, as expected
function greet(name) {
    name = name ?? "Guest"; // Default to "Guest" if name is null or undefined
    console.log(`Hello, ${name}!`);
}

greet("Alice"); // "Hello, Alice!"
greet(null);    // "Hello, Guest!"
greet();        // "Hello, Guest!"
