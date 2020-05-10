var counter = 0;
function add(){
    
    function inner(){
        counter+=1;
        return counter;
    }
    return inner();
}

console.log(add());
console.log(add());
console.log(add());