//The Promise.allSettled() method returns a promise that 
//fulfilled after all of the given promises have either been 
//fulfilled or rejected, with an array of objects that each 
//describes the outcome of each promise.

//It is typically used when you have multiple asynchronous 
//tasks that are not dependent on one another to complete successfully,
// or you’d always like to know the result of each promise.

//In comparison, the Promise returned by Promise.all() maybe more
// appropriate if the tasks are dependent on each other /
// if you'd like to immediately reject any of them reject.
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promises = [promise1, promise2];
Promise.allSettled(promises).
  then((results) => results.forEach((result) => console.log(result.status)));
// expected output:
// "fulfilled"
// "rejected"

const promise11 = Promise.resolve("Success");
const promise22 = Promise.reject("Failure");
const promise3 = Promise.resolve("Another Success");

Promise.allSettled([promise11, promise22, promise3])
    .then((results) => {
        results.forEach((result, index) => {
            if (result.status === "fulfilled") {
                console.log(`Promise ${index + 1} fulfilled with value: ${result.value}`);
            } else {
                console.log(`Promise ${index + 1} rejected with reason: ${result.reason}`);
            }
        });
    });
