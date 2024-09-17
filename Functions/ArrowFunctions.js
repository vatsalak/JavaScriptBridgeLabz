const gfg = () => {
    console.log("Hi form Vatsala");
}
gfg();

//In this example we Defines an arrow function gfg without parameters that logs “Hi from GeekforGeeks!” when called.

const square =x =>x*x;
console.log(square(4));
//In this example we defines an arrow function square with a single parameter x, returning the square of x.

const gfg1=(x,y,z) =>{
    console.log(x+y+z);
}
gfg1(10,15,12);
//In this example we defines an arrow function gfg with parameters x, y, z, logging their sum.

const a=(x,y,z=30) => {
    console.log(x+" "+y+" "+z);
}
a(10,20);