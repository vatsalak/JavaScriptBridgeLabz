//() => {…}, short for function. Most importantly, he can ensure that this always points to himself
//No more writing var self = this, var that = this, etc!
const sum=(a,b) =>{return a+b;}
const res=sum(3,7);
console.log(res);


const minus=(a,b)=>{
    return a-b;
}
const res1s=minus(9,6);
console.log(res1s);