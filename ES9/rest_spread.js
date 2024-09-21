//In ES2015, the Rest indefinite length parameters… can be converted into an array and passed in.
function restParams(p1, p2, ...p3) {
    console.log(p1); // 1
    console.log(p2); // 2
    console.log(p3); // [3, 4, 5]
}
restParams(1, 2, 3, 4, 5);
//And the spread is the opposite of the rest, converting the array into a separate parameter.

//For example, Math.max() returns the maximum value in the incoming number.
const values = [19, 90, -2, 6, 25];
console.log( Math.max(...values) ); // 90
//It also provides the function of destructuring assignments for Objects.
const myObject = {
    a: 1,
    b: 2,
    c: 3
  };
  const { a, ...r } = myObject;
  // a = 1
  // r = { b: 2, c: 3 }
  
  // Can also be used in function input parameters
  function restObjectInParam({ a, ...r }) {
      console.log(a); // 1
      console.log(r); // {b: 2, c: 3}
  }
  
  restObjectInParam({
    a: 1,
    b: 2,
    c: 3
  });