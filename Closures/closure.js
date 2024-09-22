//In JavaScript, a closure is a feature that allows a function to retain access to its lexical scope, even when that function is executed outside its original scope. It enables the inner function to remember and access variables from the outer (enclosing) function, even after the outer function has finished executing.

// How Closures Work
// A closure is created when:

// An inner function is defined inside an outer function.
// The inner function references variables from the outer function's scope.
// The inner function is returned or accessible outside the scope of the outer
// function.
// Example of a Closure
function OuterFunction(){
    let outFunVar="I am inside Outer function";
    function InnerFunction()
    {
        console.log(outFunVar);
        
    }
    return InnerFunction;
}
const closure=OuterFunction();
closure();
//Explanation:

// innerFunction is a closure because it captures the outerVariable from its parent scope (outerFunction).
// Even after outerFunction has finished execution,
//  innerFunction still has access to outerVariable because of the closure.