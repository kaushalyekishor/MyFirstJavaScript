/*var rl = require('./inputData');
var greetingSentence = 'Hello, <<Username>> how are you';
var name
rl.quetion('Enter the name',(answer)=>{
    name = answer;
    greetingSentence = greetingSentence.replace(/<<Username>>/i,name);
    console.log(greetingSentence);
    rl.close();
})*/

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`What's your name?`, name => {
    console.log(`Hi ${name}!`,'How are you')
    readline.close()
  })