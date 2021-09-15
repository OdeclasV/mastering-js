function isEitherEvenAndLessThan9(num1, num2) {
    // your code here
    if (num1 % 2 == 0 || num2 % 2 == 0){
        return true
    } 
    else if (num1 < 9 && num2 < 9) return true
    else return false
}

var output = isEitherEvenAndLessThan9(2, 4);
console.log(output);

var output = isEitherEvenAndLessThan9(5, 8);
console.log(output);