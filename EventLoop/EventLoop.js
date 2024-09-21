//The event loop is a mechanism that allows JavaScript to perform non-blocking operations by offloading operations to 
//the browser, freeing up the main thread to perform other tasks.
// It continuously checks the call stack and the callback queue,
 //executing code and handling asynchronous tasks like setTimeout, promises, etc.

console.log('Start');

setTimeout(() => {
  console.log('Timeout callback');
}, 1000);

console.log('End');
//The setTimeout callback is added to the callback queue, 
//and "End" is logged before "Timeout".

console.log("Start");
Promise.resolve().then(() => {
  console.log("Promise");
});
console.log("End");
//The promise resolves asynchronously but with microtask priority, so "Promise" 
//is logged before "Timeout" (if there were a timeout).


console.log("Start");
setTimeout(()=>{
  console.log("Time out1"),0;
  
})
setTimeout(()=>{
  console.log("Time out2"),0;
  
})
console.log("END");
//This is the example 3 
//Both setTimeout callbacks are queued, and "End" is logged first, followed by "Timeout 1" and "Timeout 2".

console.log("Start");
setTimeout(() => {
  console.log("Timeout");
}, 0);
Promise.resolve().then(() => {
  console.log("Promise");
});
console.log("End");
//Thisis the example four
//The promise logs "Promise" before the setTimeout because it uses the microtask queue.

console.log("Start");
document.addEventListener("click", () => {
  console.log("Click event");
});
console.log("End");
//This is the example 5
//The "Click event" callback will be executed when a click event occurs, after "End".

