//terators are objects that allow you to traverse through a collection (e.g., arrays, strings) one step at a time. They are an integral part of the ES6 
//for...of loop and can be customized using the [Symbol.iterator] method.
const arr=[1,2,3];
const iterator=arr[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());



//The next() method returns an object with two properties: value (current value

//) and done (a boolean indicating if the iteration is complete).
