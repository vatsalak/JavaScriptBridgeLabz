//A callback is a function passed into another function as an argument,
// which is then invoked inside the outer function to complete some action.
function greet(name,callback){
    console.log("hello" + name);
    callback();
}
greet("John",()=>console.log("This is call back")
);
//This is example 1 
//The callback function is executed after the greet function logs the greeting.

function loadData(callback){
    setTimeout(()=>{
        callback("DataLoaded")
    },1000);
}
loadData((message) => console.log(message));
//Example2 The callback handles the asynchronous data loading.

function calculateSum(a,b,callback){
    let sum=a+b;
    callback(sum);
}
calculateSum(5,8,(result)=>{console.log("sum:",result);})
//Example3 The callback receives the calculated sum.


function download(url, callback) {
    setTimeout(() => {
      callback("Downloaded content from " + url);
    }, 2000);
  }
  download("https://example.com", (data) => {
    console.log(data);
  });
  //Example4 The callback processes the downloaded data.

  function asyncTask(callback){
    setTimeout(()=>{console.log("Asyn task completed");},1000
    );
  }
  asyncTask((message)=>{
    console.log(message);
    
  })