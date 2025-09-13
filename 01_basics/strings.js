name = "Ayush"
lastname = "shrivastava"

// console.log(name + lastname) //concatenation less used

console.log(`My name is ${name} ${lastname}`) //template literals more used

console.log(`My name is ${name.toUpperCase()} ${lastname.toLowerCase()}`) //template literals more used


const newName = new String("Ayush-Sh") //creates a string object
console.log(newName)

console.log(newName.__proto__) //prototype of string object

console.log(newName.length) //length property
console.log(newName[0]) //indexing

console.log(newName.includes("y")) //includes method

console.log(newName.endsWith("h")) //endsWith method
// console.log(newName.toUpperCaseCase()) //toUpperCase method
console.log(newName.charAt(3)) //charAt method
console.log(newName.indexOf("A")) //indexOf method

const substring = newName.substring(0,4) //substring method
console.log(substring)

const slice = newName.slice(0,3) //slice method

const abc = "   Ayush   "
console.log(abc)
console.log(abc.trim()) //trim method


const url = "https//www.ayush-shrivastava%20.com"

console.log(url.replace('%20', '-')) //replace method

console.log(url.split('.')) //split method