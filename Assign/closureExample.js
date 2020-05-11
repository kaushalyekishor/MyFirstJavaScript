// (IIF)  Self invoking function
//closure

var add = (function(){          //first function call then add to variable
    var counter = 0;
       return function () {
            counter += 1;
            return counter;
        }
    })()
    
    console.log(add());         //call add function
    console.log(add());
    console.log(add());    