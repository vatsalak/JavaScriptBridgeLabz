//The global globalThis the property contains the global this value,
// which is akin to the global object.
//In the past the practice was
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/globalThis
const getGlobal = function () { 
    if (typeof self !== 'undefined') { return self; } 
    if (typeof window !== 'undefined') { return window; } 
    if (typeof global !== 'undefined') { return global; } 
    throw new Error('unable to locate global object'); 
  }; 
  
  var globals = getGlobal();
  //or now, we can do like this

function canMakeHTTPRequest() {
    return typeof globalThis.XMLHttpRequest === 'function';
  }
  console.log(canMakeHTTPRequest());
  // expected output (in a browser): true