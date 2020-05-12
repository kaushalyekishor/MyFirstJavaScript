var fs = require('fs');
var file = "b.txt";
console.log("program started");
var data = fs.readFileSync(file);
var arr = [data.toString()];
//console.log(arr.length);
//console.log(arr);
for (let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length-1; j++){
        var temp;
        if (arr[j] > arr[j+1]){
            temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}
console.log(arr);
console.log("program ended");