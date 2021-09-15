function countCharacter(str, char) {

    let letters = str.split('')
    let letterCounter = 0
    
    for(let letter of letters){
        if(letter == char){
            letterCounter++;
        }
    }
    return letterCounter;
}

let string = 'ksjldhfgoiauhdsfopijhasdnklmflaksjyhdv f;aoisdufpqowiejfp nqwoeiuhfdncpxqiwdybufv'
console.log(countCharacter(string,'f'))