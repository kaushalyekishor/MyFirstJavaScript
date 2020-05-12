var fs = require('fs');
var file = "pizza.txt";
console.log("program started");
//var data = fs.readFile();
//var data = fs.readFile(file);
var data = fs.readFileSync(file);
console.log(data.toString());
console.log("program ended");

