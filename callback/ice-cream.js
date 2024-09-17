let stocks = {
    Fruits : ["Strawberry","Grapes","Banana","Apple"]
}
let order = (call_production) => {
    console.log("Order placed,please call production")
    call_production()
};

let production = () => {
    console.log("Order recieved,starting production")
};
order(production);