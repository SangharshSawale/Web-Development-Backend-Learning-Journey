// fruits/index.js
// Combines all fruit modules and exports them as an array

const apple = require("./apple");
const banana = require("./banana");
const orange = require("./orange");

const fruits = [apple, banana, orange];

module.exports = fruits;
