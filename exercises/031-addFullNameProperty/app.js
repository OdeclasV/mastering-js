let person = {
  firstName: 'Jade',
  lastName: 'Smith'
}



function addFullNameProperty(obj) {
  obj["fullName"] = obj.firstName + ' ' + obj.lastName;
  return obj
}

console.log(addFullNameProperty(person));