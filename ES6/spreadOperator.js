//That is…, Array can be expanded, if it is an Object, it will be expanded according to key-value.
const stuendts = ['Angel', 'Ryan']; 
const people = ['Sara', ...stuendts, 'Kelly', 'Eason'];
console.log(people); // ["Sara", "Angel", "Ryan", "Kelly", "Eason"]