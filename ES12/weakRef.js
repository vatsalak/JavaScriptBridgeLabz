//A WeakRef object contains a weak reference to an object, which is called its target or
// referent. A weak reference to an object is a reference that does not prevent the object
// from being reclaimed by the garbage collector. In contrast, a normal (or strong) reference keeps
// an object in memory. When an object no longer has any strong references to it, the JavaScript
// engine's garbage collector may destroy the object and reclaim its memory. 
//If that happens, you can't get the object from a weak reference anymore.

//This example starts a counter shown in a DOM element, stopping when the element doesn’t
// exist anymore:
class Counter {
    constructor(element) {
      // Remember a weak reference to the DOM element
      this.ref = new WeakRef(element);
      this.start();
    }
  
    start() {
      if (this.timer) {
        return;
      }
  
      this.count = 0;
  
      const tick = () => {
        // Get the element from the weak reference, if it still exists
        const element = this.ref.deref();
        if (element) {
          element.textContent = ++this.count;
        } else {
          // The element doesn't exist anymore
          console.log("The element is gone.");
          this.stop();
          this.ref = null;
        }
      };
  
      tick();
      this.timer = setInterval(tick, 1000);
    }
  
    stop() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = 0;
      }
    }
  }
  
  const counter = new Counter(document.getElementById("counter"));
  setTimeout(() => {
    document.getElementById("counter").remove();
  }, 5000);