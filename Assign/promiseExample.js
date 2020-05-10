var fs = require('fs');         //import fs module
var file = 'numbers.txt';       //grtting a file name

function readFile(){
    return new Promise((resolve, reject) => {       //promise-->Represents the completion of an asynchronous operation
        try {
            fs.exists(file, function(exist) {   //checking file exist or not as local function
                if (exist) {                    //if exist then true
                    //console.log("1", exist)
                    resolve(exist);
                } else {
                    //console.log("2", exist)
                    reject(exist)
                }
            });
        } catch (error) {                   //if getting any type of exception then print error
            console.log(reject(error));
        }
    })
    .then((exist)=>{
        console.log('exist: '+exist);
        return new Promise((resolve, reject) => {
            if (exist) { 
                fs.stat(file, function(err, statCheck){     //get file status
                    if(statCheck){
                        console.log('inside exist: '+ statCheck.isFile());  
                        resolve(statCheck);
                    }
                    else{
                        reject(err)
                    }
                })
            }
        })
    })
    .then((statC) => {
        return new Promise(function(resolve, reject){
            try {
                console.log(statC);
                fs.readFile(file, function(err, data) {
                    //console.log("tets", data)
                     resolve(data);
                })
            } catch (error) {
                //console.log("error", error);
                reject(error)
            }
        })
    })
    .then((dataFromPreviousFunction) => {                                //passing file data in buffer format
        var array = dataFromPreviousFunction.toString().split(',');      //convert file data into String format
        var newArray = array.map(Number);                               //convert file data into number format
        return bubbleSort(newArray);                                    // return bubbleSort function with array
    })
    .then((sortedArray) => {
        console.log(sortedArray);    
    })
}

function bubbleSort(arr){               //function for sorting Array
    return new Promise(function(resolve, reject){
        try {
            //var arr = [36, 5, 12, 67, 28];
            //console.log("Given Array is:"+arr);
            var temp;
            var count = arr.length;
            for (let i = 0; i < count; i++){
                for(let j = 0; j < count -1; j++){
                    var temp;
                    if (arr[j] > arr[j+1]){
                        temp = arr[j];
                        arr[j] = arr[j+1];
                        arr[j+1] = temp;
                    }
                }
            }
            console.log("Sorted Array is:", arr);
            resolve(arr);            
        } catch (error) {
            reject(error)
        }
    })
}
readFile();

/*
  function tesat() {

}

tesat = () =>  "hi";  //6a standard
*/