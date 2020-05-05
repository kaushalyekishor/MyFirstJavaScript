var myfunc = function outerfunction(){
    var val =15
    function inner(){

    }
    function innerTwo(){
        var samplevalue = 20
        var newVal = val + samplevalue
        function foo(){
            var fooValue = 58;
            return fooValue + newVal;
        }
        // return foo();
    }
    return innerTwo();
}
var result = myfunc();
console.log(result);
