//In JavaScript, prototypes are the mechanism by which objects inherit properties from one another. Every function in JavaScript has a 
//prototype property that is used to implement inheritance.
function Person(name,age)
{
    this.name=name;
    this.age=age;
}
Person.prototype.greet=function(){
    console.log(`Heelo my name is ${this.name} and I am ${this.age} years old`);
    
};
const person1=new Person("Alice",39);
person1.greet();
// Person.prototype.greet adds the greet method to all instances of Person.
// This allows for shared methods across instances without duplicating the function in memory