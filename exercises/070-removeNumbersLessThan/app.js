var obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
function removeNumbersLessThan(num, obj) {
    // your code here
    for(const property in obj){
        if(obj[property] < num){
            delete obj[property];
        }
    }
    return obj;
}

console.log(removeNumbersLessThan(5, obj));