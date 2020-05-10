const fs = require('fs');
const util = require('util');
var file = 'numbers.txt'

var existsFile = util.promisify(fs.exists); // check file exist or not
var statCheck = util.promisify(fs.stat);  // get the status 
var readFile = util.promisify(fs.readFile);  //readfile and which format of data like string,number

existsFile(file)        //if file exist then return true
.then((exists)=>{
    if(exists){
    console.log(exists);
    return statCheck(file)
    }
})
.then((statCh)=>{       //check status true or false
    if(statCh){
        console.log(statCh.isFile());       //print status true or false
        return readFile(file);
    }
})
.then((info)=>{
    console.log(info.toString());       //print file data into String format
})