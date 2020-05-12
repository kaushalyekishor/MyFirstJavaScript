const productPrice = [1,2,3,4,5,6,7,8,9,10]
const newValues = productPrice.map(x=>x*2);
console.log(newValues);

const newFilterValues = productPrice.filter(x=>x%2);
console.log(newFilterValues);

function getShortMessages(message){
    const newFilter = messages.filter(x => x.message.length<50)
    const msg = messages.map(x=> x.message)
}

 var messages = [
     { 
        message: 'Testing aaaaaaaaaaaaaaaaaaaaaaa'
     },
     {
         message:'Testing bbbbbbbbbbbbbbbbbbbbbbb'
     },
     {
         message:'Testinf ccccccccccccccccccccccccccccccccccccccccccccccc'
     }
 ]
 getShortMessages(messages);
 