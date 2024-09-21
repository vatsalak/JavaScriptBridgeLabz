//JavaScript is a language that uses the prototype chain
//In the early days, concepts similar to OO were made through the prototype chain.
 //The writing is quite complicated. CLASS finally launched in ES6
 class Animal {
    constructor(name, color) {
      this.name = name;
      this.color = color;
    }
    // This is a property on the prototype chain
    toString() {
      console.log('name:' + this.name + ', color:' + this.color);
 
    }
  }
 
 var animal = new Animal('myDog', 'yellow'); // instantiate
 animal.toString(); // name: myDog, color: yellow
 
 console.log(animal.hasOwnProperty('name')); //true
 console.log(animal.hasOwnProperty('toString')); // false
 console.log(animal.__proto__.hasOwnProperty('toString')); // true
 
 class Cat extends Animal {
  constructor(action) {
    // The subclass must call the super function in the constructor, otherwise an error will be reported when new comes out
    // If the constructor was not written originally, the default constructor with super will be automatically generated
    super('cat','white');
    this.action = action;
  }
  toString() {
    console.log(super.toString());
  }
 }
 
 var cat = new Cat('catch')
 cat.toString();
 
 console.log(cat instanceof Cat); // true
 console.log(cat instanceof Animal); // true