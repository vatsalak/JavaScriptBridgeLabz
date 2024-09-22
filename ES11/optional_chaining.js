//In development, it is easy to 
//encounter checking whether the data exists and writing if judgment first.
//const isUserExist = user && user.info;
//if (isUserExist) { 
  //  username = user.info.name; 
//}
//If the returned data is null or there is no .intounder the user object, Uncaught TypeError: Cannot read property... will be thrown.
//cause the program cannot continue to execute

//With ?, the syntax is much simpler
//const username = user?.info?.name;
//If it exists, get the value of the name, if it does not exist, assign undefined
//Use with ||, just one line!
//const username = user?.name || 'guest';
const user = {
    name: "John",
    address: {
        city: "New York"
    }
};

// Using optional chaining to safely access properties
console.log(user?.address?.city); // "New York"
console.log(user?.address?.zipCode); // undefined (no error)
console.log(user?.contact?.phone); // undefined (no error, beca

const users = [{ name: "Alice" }, { name: "Bob" }];

// Accessing an element that exists
console.log(users?.[0]?.name); // "Alice"

// Trying to access an element that does not exist
console.log(users?.[2]?.name); // undefined (no error)

const user1= {
    greet: function() { return "Hello"; }
};

// Safely calling the greet method if it exists
console.log(user1?.greet?.()); // "Hello"

// Trying to call a method that does not exist
console.log(user1?.sayGoodbye?.()); // undefined (no error)

