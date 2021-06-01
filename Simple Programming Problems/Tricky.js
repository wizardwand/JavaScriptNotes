// Strings
typeof '1' === 'string'; // note that a number within a string is still typeof string
typeof (typeof 1) === 'string'; // typeof always returns a string
typeof String(1) === 'string'; // String converts anything into a string, safer than toString
typeof '' === 'string';

// Numbers
typeof NaN === 'number'; // Despite being "Not-A-Number"

// Booleans
typeof false === 'boolean';
typeof Boolean(1) === 'boolean'; // Boolean() will convert values based on if they're truthy or falsy
typeof !!(1) === 'boolean'; // two calls of the ! (logical NOT) operator are equivalent to Boolean()

// Undefined
typeof undefined === 'undefined';
typeof declaredButUndefinedVariable === 'undefined';
typeof undeclaredVariable === 'undefined';

// Objects
typeof {a: 1} === 'object';

// use Array.isArray or Object.prototype.toString.call
// to differentiate regular objects from arrays
typeof [1, 2, 4] === 'object';

typeof new Date() === 'object';
typeof /regex/ === 'object'; // See Regular expressions section for historical results

// The following are confusing, dangerous, and wasteful. Avoid them.
typeof new Boolean(true) === 'object';
typeof new Number(1) === 'object';
typeof new String('abc') === 'object';

// Functions
typeof function() {} === 'function';
typeof class C {} === 'function';
typeof Math.sin === 'function';

// All constructor functions, with the exception of the Function constructor, will always be typeof 'object'
let str = new String('String');
let num = new Number(100);

typeof str; // It will return 'object'
typeof num; // It will return 'object'

let func = new Function();

typeof func; // It will return 'function'


/**
 * 
 Real-world usage
 typeof is very useful, but it's not as versatile as might be required. For example, typeof([]) , is 'object',
  as well as typeof(new Date()), typeof(/abc/), etc.
  For greater specificity in checking types, a typeof wrapper for usage in production-level code would be as follows (provided obj exists):
 
 */
 function type(obj, showFullClass) {
     
     // get toPrototypeString() of obj (handles all types)
    if (showFullClass && typeof obj === "object") {
        return Object.prototype.toString.call(obj);
    }
    if (obj == null) { return (obj + '').toLowerCase(); } // implicit toString() conversion

    var deepType = Object.prototype.toString.call(obj).slice(8,-1).toLowerCase();
    if (deepType === 'generatorfunction') { return 'function' }

    // Prevent overspecificity (for example, [object HTMLDivElement], etc).
    // Account for functionish Regexp (Android <=2.3), functionish <object> element (Chrome <=57, Firefox <=52), etc.
    // String.prototype.match is universally supported.

    return deepType.match(/^(array|bigint|date|error|function|generator|regexp|symbol)$/) ? deepType :
       (typeof obj === 'object' || typeof obj === 'function') ? 'object' : typeof obj;
  }