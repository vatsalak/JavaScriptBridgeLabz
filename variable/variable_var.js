var test=13;
function foo()
{
    console.log(test);
}
foo();
// In this example, we will declare a global variable and access it anywhere inside the program

var test1=12,
    test2=13,
    test3=16
function foo1()
{
    console.log(test1,test2,test3);
}
foo1();
// In this example, we will declare multiple variables in a single statement

var test4=12;
var test4=100;
//console.log(test4);
//We did not get any error when redeclaring the variable if we did the same with the let keyword an error would be thrown

var test5 = 12;
function foo2(){
    var test5 = 100;
    console.log(test5);
}
foo2();
console.log(test5);

//We did not get any error while redeclaring the variable inside another function scope and the original value of the variable is preserved.
function foo3(){
   let a=10;

   //let a=11;
   a=12;
   console.log("a from function scope----",a);
   {
    let a=11;
    console.log("a from block scope----",a);
   }    
}