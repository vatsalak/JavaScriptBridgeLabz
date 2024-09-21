//2. Array.prototype.flat() & Array.prototype.flatMap()

//flattens the array
const arr1 = [1, 2, [3, 4]];
arr1.flat(); // [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat(); // [1, 2, 3, 4, [5, 6]]
// Pass in a number in flat, representing the flattening depth
arr2.flat(2); // [1, 2, 3, 4, 5, 6]
console.log(arr1.flat());

//flatMap(), equivalent to reduce with concat, can flatten a dimension
let arr = ["早安", "", "今天天氣不錯"]

arr.map(s => s.split(""))
// [["早", "安"], [""], ["今", "天", "天", "氣", "不", "錯"]]

arr.flatMap(s => s.split(''));
// ["早", "安", "", "今", "天", "天", "氣", "不", "錯"]