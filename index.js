//Accessing nested JavaScript objects and arrays by string path :)

const object = { property1: { property2: "Apple", property3: 'Orange' } };
const path = 'property1.property2'; //to se if it is actually working change string to property1.property3 result should be Orange
const lookup = (object, path) => path
    .replace(/\[|\]\.?/g, '.')
    .split('.')
    .filter(s => s)
    .reduce((acc, val) => acc && acc[val], object);
console.log(lookup(object, path));