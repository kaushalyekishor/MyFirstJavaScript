
const prompt = require('prompt-sync')();
let age = prompt('How old are you?');

if(checkAge(age)){
     console.log('Access granted!');
} else {
    console.log('Access denied! plese Enter the Age > 18');
}

function checkAge(age){
    if (age >= 18){
        return true;
    } else {
        return false;
    }
}
