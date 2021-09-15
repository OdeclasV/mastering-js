let obj = {
  age: 20
};

function isPersonOldEnoughToDrinkAndDrive(person) {
  // the person object contains an "age" property inside
  // your code here
  if (person.age >= 21) return true
  else return false
}

console.log(isPersonOldEnoughToDrinkAndDrive(obj))