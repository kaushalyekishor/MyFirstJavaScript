var file = 'numbers.txt'        //getting number's file
var bubble = require('./bubbleSort')        //require bubbleSort files to callback function
const fs = require('fs')        //getting file system module

function readForSort(){         //function calling
    fs.exists(file, function(exist){        //if file exist then return true or false
        if(exist){
            fs.stat(file, function(err, statCheck){ //check status if file exist or not
                if(statCheck.isFile()){
                    fs.readFile(file, function(err, data){ //if read file then pass err, data
                        if(err){  // if error then throw error
                            throw err
                        }
                        else {   // if data exist then print
                            const arrayData = data.toString().split(",");
                            const numberArray = arrayData.map(Number);
                            bubble(numberArray, function(sortedData){ // passing callback function to bubble sort with data
                                if(err){
                                    throw err;                      //if err then throw
                                }
                                else {
                                    console.log(sortedData);        //print sorted Data
                                }
                            })
                        }
                    })
                }
            })
        }
    })
}       
readForSort()