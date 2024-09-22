// Logical Assignment Operator

//During development, we can use the logical operator ||, &&and the 
//??(Nullish coalescing operator) proposed in ES2020 to solve some problems.

//And ES2021 will propose ||= , &&= , ??=, the concept is similar to +=:

let b = 2
b += 1 
// equal to b = b + 1
let a = null
a ||= 'some random text'  // a become to'some random text'
// equal a = a || 'some random text'
let c = 'some random texts'
c &&= null  // c become to null
// equal to c = c && null
let d = null
d ??= false  // d become to false
// equal to d = d ?? false