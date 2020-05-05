console.log(prime_factor(150));
console.log(prime_factor(220));
console.log(prime_factor(100));

function prime_factor(num){
    const result = [];
    for(let i =2 ;i <= num; i++){
        while(is_prime(i) && num % i ==0)
        {
            if(!result.includes(i))
                result.push(i);
                num /=i;
        }
    }
    return result;
}

function is_prime(num){
    for(let i=2; i<=Math.sqrt(num); i++)
    {
        if(num %i ==0)
        return false;
    }
    return true;
}
