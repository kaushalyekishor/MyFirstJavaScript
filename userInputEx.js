const readLie = require('prompt-sync')();
const name = readLie('what is your name? ');
//const name = 'Kishor';
if(name.length > 3)
{
    console.log('Hello '+name,", How are You?");
}
else
{
    console.log("please Enter name with greater than 3 aplhabets");
}

/*const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

rl.question("what do you think of node.js?",(answer) => {} */