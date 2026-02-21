

// const add = (a,b) => a + b;
// const sub = (a,b) => a - b;
// const mul = (a,b) => a * b;              // Send data from this file to script.js file
// const div = (a,b) => a / b;
// const PI = 3.14;


// ES Module exports (currently used in this project)
export const add = (a, b) => a + b;
export const sub = (a, b) => a - b;
export const mul = (a, b) => a * b;          // By using export, data is sent to script.js
export const div = (a, b) => a / b;
export const PI = 3.14;


// Object export using CommonJS (kept for learning reference)

// const obj = {
//     add : add,
//     sub : sub,
//     mul : mul,
//     div : div,
//     PI  : PI
// };

// module.exports = obj;         // Send data from this file to script.js file
