//The Object.fromEntries() method transforms a list of key-value pairs into an object.
const entries = new Map([
    ['foo', 'bar'],
    ['baz', 42]
  ]);
  const obj = Object.fromEntries(entries);
  console.log(obj);
  // expected output: Object { foo: "bar", baz: 42 }