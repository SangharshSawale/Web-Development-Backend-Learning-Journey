
// Basic JavaScript execution in Node.js
let n = 5;
for(let i = 1; i <= 5; i++){
    console.log("Hello ", i);      
}
console.log("Bye..!");



// Example: reading command line arguments using process.argv
let args = process.argv;
for(let i = 2; i < args.length; i++){     
    console.log("Hello ", args[i])
}


// CommonJS import (kept for learning reference – not used now)
/* const math = require("./math");            
console.log(math.sub(5, 2));
console.log(math.mul(5, 2));
console.log(math.div(5, 2));
console.log(math.PI); */




/*const info = require("./fruits");          // Accept data from fruits folder
console.log(info);*/


// ES Module import (currently used in this project)

import { add, sub, mul, div, PI } from "./math.js";
console.log(add(5, 2));
console.log(sub(5, 2));
console.log(mul(5, 2));          // By using import, data is accepted from math.js
console.log(div(5, 2));
console.log(PI);
