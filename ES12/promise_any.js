//Promise.any
//Promise.any() takes an iterable of Promise objects. 
// It returns a single promise that fulfills as soon as any 
// of the promises in the iterable fulfills, with the value of the
//  fulfilled promise. 
// If no promises in the iterable fulfill (if all of the given 
//     promises are rejected), then the returned promise is rejected with 
//     an AggregateError, a new subclass of Error that groups together 
//     individual errors.
const p1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve('p1 resolved value')
    }, 1000)
  })
  const p2 = new Promise((resolve) => {
    setTimeout(() => {
      resolve('p2 resolved value')
    }, 500)
  })
  const p3 = new Promise((resolve) => {
    setTimeout(() => {
      resolve('p3 resolved value')
    }, 1800)
  })
  Promise.any([p1, p2, p3]).then(value=>{
    console.log(value)
  }) // p2 resolved value