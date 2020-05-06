var amount = 868;
countCurrency(amount);

function countCurrency(amount){
    var notes = [2000, 500, 200, 100, 50, 20, 10, 5, 1];
    var noteCounter = [];

    for (let i=0; i < 9; i++){
        if (amount >= notes[i]){
            noteCounter[i] = parseInt(amount / notes[i]);
            amount = amount - noteCounter[i] * notes[i];
        }
    }
    //print notes
    console.log("Currency count");
    for (let i=0; i<9; i++){
        if (noteCounter[i] != 0){
           console.log(notes[i]+" : "+parseInt(noteCounter[i]));
        }
    }
}