//Example 1 marks array
var marks = [97,82,75,64,36];
//console.log(marks);
typeof marks

let heroes = ["ironman","thor","hulk","spiderman"];
console.log(heroes);
console.log(marks[0]);
console.log(heroes[0]);
marks[0]=10;
//console.log(marks);//array is mutable in java script 
//where as strings are immutable in java script
for(let i=0;i<heroes.length;i++)
{
    console.log(heroes);

}
//Example 2 cities array
let cities=["Mumbai","Pune","Hyderabd","Chennai"];
for(let city of cities)
{
    console.log(city.toUpperCase());
}
//Example 3 calculate the average of marks array

let Marks=[98,89,83,53,65];
var sum=0;
for(let mark of Marks)
{
    sum+=mark;
}
console.log(`The average marks is :${sum}`);


let items=[250,340,400,450];
let i=0;
for(let val of items)
{
    console.log(`value at index ${i}=${val}`);
    let offer=val /10;
    items[i] =items[i] -offer;
    console.log(`value after offfer=${val}`);
    i++;
}
//Array methods in java script
//Push():add to end
//pop():delete from end and return
//toString()

let foodItems = ["potato","apple","lichi","tomato"];
foodItems.push("chips","burger","paneer");
console.log(foodItems);
let deleteditm=foodItems.pop();
console.log("Deleted",deleteditm);

//toString( in java script) to convert an array to a string
console.log(foodItems.toString())
//toString converts an array into a string,it keeps the original array intact
console.log(marks.toString());
//Concate in javascript
let marvel_heroes = ["Thor","Spiderman","ironman"];
let dcHeroes=["superman","batman"];
let indianHeroes = ["Shaktiman","Krish"];
let hero = marvel_heroes.concat(dcHeroes,indianHeroes);

console.log(hero);
//slice and splice
// methods in java script
let arr=[1,2,3,4,5,6,7];
let slicedArr=arr.splice(2,3);
// Slice from index 1 to index 3 (end index is not included)
console.log(slicedArr);
//slice() creates a new array, copying elements from the original without modifying it.
//splice() modifies the original array by removing and/or adding elements.
let splicedArr=arr.splice(1,2,4,5);
console.log(slicedArr);

let fruits = ["Apple", "Banana", "Orange", "Mango", "Peach"];

// Remove 2 elements starting from index 1, and add "Grapes" and "Pineapple" at the same position
let removedFruits = fruits.splice(1, 2, "Grapes", "Pineapple");

console.log(removedFruits); // Output: ["Banana", "Orange"]
console.log(fruits);        


//Shift methods in array
let companies=["Apple","Cisco","Nvidia","Nokia","Adobe"];
//Remove the first company from the array
companies.shift();
console.log(companies);

//Delete Nokia and replace it with Netflix

companies.splice(2,1,"Netflix");
console.log(companies);

//Add Amazon at the first

companies.unshift("Amazon");
console.log(companies);