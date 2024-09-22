//Before using catch, whether it is useful or not, be sure to pass in an eparameter to represent the error received.

//If it is not used now, you can omit it.

try {
    //// Intentional error: undefined variable
    console.log(nonExistanceVariable);//// This will throw a ReferenceError
    
} catch(e) {
    // e is the error object containing details about the thrown error
    console.error("An Error occured",e.message);/// Log the error message
    console.error("stack trace",e.trace);//// Log the stack trace for debugging
    
}

// If e is not used, it can be omitted
//try {...} catch {...}