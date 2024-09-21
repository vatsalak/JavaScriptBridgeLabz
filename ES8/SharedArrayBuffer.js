//SharedArrayBuffer is a fixed-length raw binary data buffer, similar to ArrayBuffer.
//Can be used to create data on shared memory. Unlike ArrayBuffer, SharedArrayBuffer cannot be detached.
/**
 * @param length size，unit byte
 * @returns {SharedArrayBuffer} the default value is 0。
 */
const sab = new SharedArrayBuffer(length);
/*Atomics object, which provides a set of static methods to perform atomic operations on SharedArrayBuffer.

All properties and functions of Atomics are static, just like Math. can’t come out new.

If a multi-thread reads and writes data at the same location at the same time, the atomic operation ensures that the data being operated is as expected: that is, the next one will be performed after the previous sub-operation has ended. Operation is not interrupted

It can be said that it is a function that is reinforced in response to the development of a multi-thread Server in Node.Js, and the opportunity to use it in front-end development is quite low.
chrome already provides support*/