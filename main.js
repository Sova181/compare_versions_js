const func = require('./func_vers');
console.log(func("0.1", "0.2")); //-1
console.log(func("0.2", "0.1")); // 1
console.log(func("4.2", "4.2")); // 0 