
function makeTranid(length){
    var result = '';
    var char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charLength = char.length;
    for(let i = 0; i < length; i++){
        result += char.charAt(Math.floor(Math.random() * charLength));
    }
    return result;
}
console.log(makeTranid(10));
