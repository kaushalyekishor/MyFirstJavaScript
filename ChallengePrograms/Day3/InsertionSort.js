var arr = [10, 8, 14, 78, 93, 52];
console.log("Given Array is:["+arr+"]");

var temp = 0;
var min;

for (let i=0; i<arr.length; i++){
    min = i;
    for (let j=i+1; j<arr.length; j++){
        if(arr[j] < arr[min]){
            min = j;
        }
    }
    temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
}
console.log("Sorted Array is:["+arr+"]");
