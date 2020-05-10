function bubbleSort(arr, callback){
    //var err = 'bug..'
    console.log(arr);
    
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

callback(arr);
}

module.exports = bubbleSort