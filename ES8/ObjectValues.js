const exampleObj = {a: 1, b: 2, c: 3, d:4};
console.log(Object.value(exampleObj)); // [1, 2, 3, 4];

// To do the same thing before, use the following notation. much verbose
const values = Object.keys(exampleObj).map(key => exampleObj[key]);

//Returns all the values of the Object’s own properties,
// excluding inherited values.

//Object.entries()

//Returns the enumerable key, the value of the incoming object itself.

const exampleObj1 = {a: 1, b: 2, c: 3, d:4};
console.log(Object.entries(exampleObj1)); // [["a", 1], ["b", 2], ["c", 3], ["d", 4]];

// Usually used with for
for (const [key, value] of Object.entries(exampleObj)) {
	console.log(`key: ${key}, value: ${value}`);
}
// key: a, value: 1
// key: b, value: 2
// key: c, value: 3
// key: d, value: 4