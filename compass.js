'use strict';

(function promptFunc() { 
    let inpt = prompt('"COMPASS"\n\nHow do you want it to be implemented?\n\n1 - "Function Class"\n2 - "ES6 Class"\n3 - "Prototype"\n4 - "Prototype ES6"\n5 - "Singleton"', "1 - 5");

    const arr = [functionClass, es6Class, prototype, prototypeEs6, singleton];

      try {
        arr[--inpt]();
      } catch(e) { alert('wrong number'); promptFunc(); }
})();


/* Function Class */

function functionClass() {

  function CompassI(e,w,n,s) {
    this.east = e;
    this.west = w;
    this.north = n;
    this.south = s;
    this.info = function() {
        return 'W: '+ this.west +'; N: '+ this.north +'; E: '+ this.east +'; S: '+ this.south
      }
  }

  const latitude = new CompassI(5,7,41,57);
    
  alert(latitude.info());
}



/* ES6 Class */

function es6Class() {

  class CompassII {
    constructor(e,w,n,s) {
      this.east = e;
      this.west = w;
      this.north = n;
      this.south = s;
      this.info = function() {
        return 'W: '+ this.west +'; N: '+ this.north +'; E: '+ this.east +'; S: '+ this.south
      }
    }
  }

  const direction = new CompassII(7,77,70,17);

  alert(direction.info());
}



/* Prototype */

function prototype() {

  function CompassIII(e,w,n,s) {
    this.east = e;
    this.west = w;
    this.north = n;
    this.south = s;
  }

  CompassIII.prototype.info = function() {
        return 'W: '+ this.west +'; N: '+ this.north +'; E: '+ this.east +'; S: '+ this.south
      }

  const longitude = new CompassIII(4,17,1,38);
    
  alert(longitude.info());
}



/* Prototype ES6 */

function prototypeEs6() {

  class CompassIV {
    constructor(e,w,n,s) {
      this.east = e;
      this.west = w;
      this.north = n;
      this.south = s;
    }

    info() {
      return 'W: '+ this.west +'; N: '+ this.north +'; E: '+ this.east +'; S: '+ this.south
    }
  }

  const attitude = new CompassIV(6,66,16,6);
    
  alert(attitude.info());
}



/* Singleton */

function singleton() {

  const altitude = new function() {
    this.east = 1;
    this.west = 23;
    this.north = 20;
    this.south = 48;
    this.info = function() {
      return 'W: '+ this.west +'; N: '+ this.north +'; E: '+ this.east +'; S: '+ this.south
    }
  }
    
  alert(altitude.info());
}
