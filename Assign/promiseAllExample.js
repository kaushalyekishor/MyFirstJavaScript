const fs = require('fs');
const util = require('util');
var file = 'numbers.txt'

var existsFile = util.promisify(fs.exists);     // Here we used util.promisify to convert fs.readFile into a promise based method.
var statCheck = util.promisify(fs.stat);        //Now instead of taking a callback, the readFile method gives as a Promise.
var readFile = util.promisify(fs.readFile);     

Promise.all([
    existsFile(file), // if file existc return true
    existsFile('faceBookMessage.txt'),
    existsFile('faceBookNotification.txt')
])
.then(stat=>{
  return  Promise.all([
        statCheck(file),  //get the file status
        statCheck('faceBookMessage.txt'),
        statCheck('faceBookNotification.txt')
    ])
})
.then(info=>{
   return Promise.all([
        readFile(file),
        readFile('faceBookMessage.txt'),
        readFile('faceBookNotification.txt')
    ])
})
.then(data=>{
    const [data1 , data2, data3] = data;
    console.log((data1.toString()));
    console.log((data2.toString()));
    console.log((data3.toString()));
})