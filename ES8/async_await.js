//An async function is a function declared with the async keyword, and the await the keyword is permitted within it. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner 
//style, avoiding the need to explicitly configure promise chains.
async test() {
    try {
        const result = await otherAsyncFunction();
        console.log(result); // output result
    } catch(e) {
        console.log(e); // Can catch errors if otherAsyncFunction() throws an error
    }
}