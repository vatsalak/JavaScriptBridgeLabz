//Hoisting in JavaScript is a behavior in which variable and 
//function declarations are moved to the top of their containing
// scope during the compilation phase, before the code is executed.
// This means that you can use variables and functions before they are 
//actually declared in the code.

//However, hoisting only applies to the declarations themselves, not to 
//the assignments. Understanding this behavior is crucial to avoid unexpected
// results in your code.

//Hoisting in Detail
//1.Variable hoisting
console.log(hoisted);
var hoisted="hello";
console.log(hoisted);

//Function Hoisting:

// Function declarations are fully hoisted, meaning both the function
//  name and the function body are moved to the top of the scope.
// This allows you to call the function before its declaration in the code.
hoistedFunction();
function hoistedFunction()
{
    console.log("Hello world");
    
}
//Example 3 Hoisting let and const
console.log(hoistedConst); // ReferenceError: Cannot access 'hoistedConst' before initialization
const hoistedConst = 20;
console.log(hoistedLet); // ReferenceError: Cannot access 'hoistedLet' before initialization
let hoistedLet = 10;
// Variable Hoisting with let and const:

// Variables declared with let and const are also hoisted but are not initialized.
// They are in a "temporal dead zone" from the start of the block
// until the declaration is encountered.
// Accessing them before the declaration results in a ReferenceError