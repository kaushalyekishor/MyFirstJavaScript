const fs = require('fs');
const util = require('util');
var file = 'numbers.txt'

var existsFile = util.promisify(fs.exists);
var statCheck = util.promisify(fs.stat);
var readFile = util.promisify(fs.readFile);

Promise.all([
    existsFile(file),
    existsFile('faceBookMessage.txt'),
    existsFile('faceBookNotification.txt')
])
.then(stat=>{
  return  Promise.all([
        statCheck(file),
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