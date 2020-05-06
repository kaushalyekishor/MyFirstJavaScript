const arr =[0,-1, 2,-3,1]; 
var n =arr.length; 
console.log(arr , n);

findTriplets(arr, n);

function findTriplets(arr, n){
    let found = false;
    for(let i=0; i<n-2; i++){
        for(let j=i+1; j<n-1; j++){
            for(let k=j+1; k<n; k++){
                if(arr[i] + arr[j] + arr[k] == 0){
                    console.log(arr[i],arr[j],arr[k]);
                    found = true;
                }
            }
        }
    }
    if(found == false){
        console.log("Not Exist ");
    }
}    