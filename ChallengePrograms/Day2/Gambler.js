const readline = require('prompt-sync')();
var stake = readline("Enter stake:");    //gambler's stating bankroll
var goal = readline("Enter goal:");     //gambler's desired bankroll
var trials = readline("Enter trials:");  //number of trials to perform 
//var stake = 20;
//var goal = 50;
//var trials = 1000;
var bets = 0;       
var wins = 0;    

//repeat trials times
for (var t = 0; t < trials; t++) {
    // do one gambler's ruin simulation
    var cash = stake;
    while (cash > 0 && cash < goal) {
        bets++;
        if (Math.random() < 0.5){
            cash++;     // win
        } else {
            cash--;     // lose
        }                     
    }
    if (cash == goal){
        wins++;        // did gambler go achieve desired goal?
    } 
}

//print results
console.log(wins+" wins of "+trials);
console.log("Percentage of games won = "+100*wins/trials);
console.log("Avg # bets = "+1*bets/trials);
