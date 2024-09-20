console.log("Start");
setTimeout(()=>{
    console.log("Asynchronous task complete");
},1000);
console.log("End");
//Example 1 this is an asynchronous function so instructions are executed
// parallely so first End is printed and later Asynchronous task complete gets printed


console.log("Task1");
setTimeout(()=>{
 console.log("Task2");
    
},1000);
console.log("Task3");
//Example 2 of asynchronous task

function asyncAdd(a,b,callback) {
    setTimeout(()=>{
        callback(a+b);
    },1000);
}
asyncAdd(2, 3, (result) => {
    console.log(result);
  });
//Example 3 uses callback for asynchronous function

function nonBlocking(){
    setTimeout(()=>{
        console.log("Non blocking operation complete");
        
    },1000);    
}
nonBlocking();
console.log("Next task");
//Example 4 The next task is executed immediately, without waiting.

fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data));
console.log("Fetching data...");
//Example 5 The fetch API is asynchronous, so "Fetching data..."
// is logged before the data is received.
