function bubbleSort(arr, callback){  //function for passing array and callback arguments
    //var err = 'bug..'
    //console.log(arr);
    
for (let i = 0; i < arr.length; i++){    //sorting for loop
    for(let j = 0; j<arr.length-1; j++){
        var temp;
        if (arr[j] > arr[j+1]){  //compare 1st & 2nd value in array
            temp = arr[j];      //if condition true then swapping both array
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}

callback(arr);  //return callback function
}

module.exports = bubbleSort