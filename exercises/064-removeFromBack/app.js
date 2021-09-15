function removeFromBack(arr) {
    // your code here
    arr.pop(arr[arr.length-1]);
    return arr;
}

var output = removeFromBack([1, 2, 3]);
console.log(output);