var fs = require('fs');
var file = "sample.json";
console.log("program started");
var data = fs.readFileSync(file);
console.log(data.toString());
console.log("program ended");


var config = require("sample.json");
if(confirm.Age>20){
    console.log(config.Name);
} else {
    console.log(config.Age);
}