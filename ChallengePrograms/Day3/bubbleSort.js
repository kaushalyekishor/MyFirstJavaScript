var arr = [36, 5, 12, 67, 28];
console.log("Given Array is:["+arr+"]");
var temp;

for (let i = 0; i < arr.length; i++){
    for(let j = 0; j<arr.length-1; j++){
        var temp;
        if (arr[j] > arr[j+1]){
            temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}
console.log("Sorted Array is:["+arr+"]");