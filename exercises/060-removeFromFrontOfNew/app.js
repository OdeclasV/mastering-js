function removeFromFrontOfNew(index) {
    // your code here
    return index != arr[0];
}

const arr = [1,2,3];

var output = arr.filter(removeFromFrontOfNew);

console.log(output)