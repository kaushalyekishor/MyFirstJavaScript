//chaining Program

var myFunc = function outerfunction(){
    var val = 10
    function inner(){
    }
    function innerTwo(){
        var sampleValue = 20
        var newVal = val + sampleValue       
            function foo(){
                test = 5;
                var fooValue = 50;
                return fooValue + newVal;
        }
        return foo();
    }
    return innerTwo();
}

var result = myFunc();
console.log(result);
console.log(test); 