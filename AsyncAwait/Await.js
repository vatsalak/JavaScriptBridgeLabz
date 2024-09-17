//The await keyword is used to wait for a promise to resolve. It can only be used within an async block.
//Execution Pause: Await makes the code wait until the promise returns a result, allowing for cleaner and more manageable asynchronous code.
const getData = async () => {
    let y = await "Hello World";
    console.log(y);
}

console.log(1);
getData();
console.log(2);