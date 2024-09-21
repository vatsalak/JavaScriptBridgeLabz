const name = 'Angel', age = 18, city = 'ChangHwa';

// Before ES6, we must write like this
const customer = {
    name: name,
    age: age,
    city: city
} // // {name: 'Angel', age: 18, city: 'ChangHwa'}

// After ES6, we can do it
const newCustomer = {
    name,
    age,
    city
} // {name: '小明Angel, age: 18, city: 'ChangHwa'}