//current Date Program
//var today = new Date(2014, 10, 15);  // format->(year, month, day)
var today = new Date();
var dd = today.getDate();

var mm = today.getMonth()+1;

var yyyy = today.getFullYear();

/*if(dd<10) {
    dd='0'+dd;
} 
if(mm<10) {
    mm='0'+mm;
} */

today = dd+'/'+mm+'/'+yyyy;
console.log(today);
