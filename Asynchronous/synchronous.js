//Synchronous execution means tasks are performed one at a time in sequence. If a task takes time, subsequent tasks have to wait. It is blocking.
console.log("Start");
let result = 0;
for (let i = 0; i < 1000000000; i++) {
  result += i;
}
console.log("Result:", result);
console.log("End");
//Eg1

console.log("Task 1");
console.log("Task 2");
console.log("Task 3");
//Thus is example 2

function syncAdd(a,b)
{
    return a+b;
}
let res= syncAdd(12,14);
console.log(res);
//This is example 3

function blockingOperation() {
    let start = new Date().getTime();
    while (new Date().getTime() < start + 5000); // Block for 5 seconds
    console.log("Blocking Operation Complete");
  }
  blockingOperation();
  console.log("Next Task");
//This is example 4

let UserInput= prompt("Enter your name");
console.log("You entered" , UserInput);
//BRowser waits until the user input