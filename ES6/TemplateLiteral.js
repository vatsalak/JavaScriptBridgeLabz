//The composition of long strings, in the past, was concatenated through +.
//Its readability is pretty bad. With template strings, it’s much easier to read.
const firstName = 'Ken';
const lastName = 'Huang';
// not use template literal
const name = 'Hello, My name is' + firstName + ', ' + lastName;
// use template literal
const nameWithLiteralString = `Hello, My name is ${firstName}, ${lastName}`;