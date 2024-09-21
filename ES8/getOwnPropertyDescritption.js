//Get your own Descriptor. General development business requirements are usually not used.
const exampleObj = {a: 1, b: 2, c: 3, d:4};

Object.getOwnPropertyDescriptors(exampleObj);
// {a: {…}, b: {…}, c: {…}, d: {…}}
// a: {value: 1, writable: true, enumerable: true, configurable: true}
// b: {value: 2, writable: true, enumerable: true, configurable: true}
// c: {value: 3, writable: true, enumerable: true, configurable: true}
// d: {value: 4, writable: true, enumerable: true, configurable: true}
// __proto__: Object