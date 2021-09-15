function removeFromBackOfNew(index) {
  // your code here
  return index != arr[arr.length-1];
}

const arr = [3, 6, 9, 12];

const output = arr.filter(removeFromBackOfNew);

console.log(output);
//console.log(arr)