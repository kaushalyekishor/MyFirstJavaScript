const readLie = require('prompt-sync')();
var stake = readLie("Enter stake:");    //gambler's stating bankroll
var goal = readLie("Enter goal:");     //gambler's desired bankroll
var trials = readLie("Enter trials:");  //number of trials to perform 

var bets = 0;       //total number of bets made
var wins = 0;       //total number of games won

//repeat trials times
for (let i = 0; i< trials; i++){
    //do one gambler's ruin simulation
    var cash = stake;
    while (cash > 0 && cash < goal){
        bets++;
        if (Math.random() < 0.5){
            cash++;  // win $1
        } else {
            cash--; //lose $1
        } 
        if ( cash == goal){
            wins++;     //did gambler go achieve desired goal?
        }
    }
}
//print results
console.log(wins+" wins of "+trials);
console.log("Percentage of games won = "+100*wins/trials);
console.log("Avg # bets = "+1*bets/trials);
