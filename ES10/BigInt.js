//A BigInt value, also sometimes just called a BigInt, 
//is a bigint primitive, created by appending n to the 
//end of an integer literal, or by calling the BigInt()
// function (without the new operator) and giving 
//it an integer value or string value.

//ES5: String, Number, Boolean, Null, Undefined
//ES6 Added: Symbol, 6 types
//ES10 added: BigInt, reaching 7 types

const theBiggestInt = 9007199254740991n;

const alsoHuge = BigInt(9007199254740991);
// ↪ 9007199254740991n

const hugeString = BigInt("9007199254740991");
// ↪ 9007199254740991n

const hugeHex = BigInt("0x1fffffffffffff");
// ↪ 9007199254740991n

const hugeBin = BigInt("0b11111111111111111111111111111111111111111111111111111");
// ↪ 9007199254740991n