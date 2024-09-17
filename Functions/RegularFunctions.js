function greet(nam) {
    console.log('Hello, ' + nam + '!');
}

// Calling the function
greet('Geek'); 

//Regular functions use the arguments object to access all passed arguments, like an array.

function showArgs() {
    console.log(arguments);
}
showArgs(1, 2, 3);

//The function allows duplicate parameters in non-strict mode; the last a overwrites the first
function example(a, b, a) {
    console.log(a, b);
}
example(1, 2, 3);

//In this regular function, this refers to the calling object obj. Output will be the name property.
const obj = {
    name: 'Geeks',
    greet: function() {
        console.log(this.name);
    }
};
obj.greet(); 