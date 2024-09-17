//Here, we will see the basic use of async in JavaScript.
const getData = async() => {
    let data="Hello world";
    return data;
}
getData().then(data => console.log(data));