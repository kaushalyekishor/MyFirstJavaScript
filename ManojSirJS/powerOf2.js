var n = 25;

if (n >= 0 && n < 31) {
    let i = 0;
    var powerOfTwo = 1;
    
    while(i <= n) {
        // console.log(i+"--> "+powerOfTwo);
        powerOfTwo = 2 * powerOfTwo;
        i = i + 1;
    }
} else {
    console.log("int is Overflow Please Enter less than 31");
}

for (let index = 0; index < 10; index++) {
    const element = index;
}
console.log(index);