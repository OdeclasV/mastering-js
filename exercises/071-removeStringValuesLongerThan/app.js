var obj = {
    name: 'Montana',
    age: 20,
    location: 'Texas',
    nickname: 'Superduperfuntest'
};

console.log(obj)

function removeStringValuesLongerThan(num, obj) {
    // your code here
    for (const property in obj) {
        if (obj[property].length > num) {
            delete obj[property];
        }
    }
    return obj;
}

console.log(removeStringValuesLongerThan(6, obj));
