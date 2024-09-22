//In JavaScript, higher-order functions are functions that operate on other functions, either by taking them as arguments or by returning them. This concept
 //is fundamental to functional programming and enables more abstract and reusable code.
function greet(name,formatter){
    return `Hello ,${formatter(name)}`;
}
function toUpperCase(name){
    return name.toUpperCase();
}
console.log(greet("Alice",toUpperCase));
//Here, greet is a higher-order function because it accepts another function, formatter, as an argument.
function multiplyBy(factor){
    return function(number){
        return number*factor;

    };
}
const double=multiplyBy(2);
console.log(double(5));
console.log(double(10));

//multiplyBy is a higher-order function because it returns another function that multiplies a number by the given factor.

//These methods are built-in higher-order functions that take a callback function as an argument
const num=[1,2,3,4,5];
const squares=num.map(function(number){
    return number*number;
});
console.log(squares);
//This above is map

const evenNo=num.filter(function(number){
    return number % 2 ===0;
});
console.log(evenNo);
//Example of filter

const sum = num.reduce(function(accumulator,number){
    return accumulator+number;
},0);
console.log(sum);

