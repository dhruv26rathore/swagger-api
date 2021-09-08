// const process = require("process") 
// console.log(process.config);
// Allocating process module
// const process = require('process');
process.chdir('C://');
console.log(process.cwd())
// Calling process.cpuUsage() method
var usage = process.cpuUsage();
console.log(process.env)
// Printing returned value
console.log("cpu usage before: ", usage);

// Current time
const now = Date.now();

// Loop to delay almost 100 miliseconds
while (Date.now() - now < 100);

// After using the cpu for nearly equal to
// 100 miliseconds
// Calling process.cpuUsage() method
usage = process.cpuUsage(usage);

// Printing returned value
console.log("Cpu usage by this process: ", usage);