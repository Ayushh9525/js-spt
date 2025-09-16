//singleton 



//literal objects

let mySymbol = Symbol("key1")
const obj = {
    name : "Ayush",
    "surname" : "shrivastava",
    [mySymbol] :"keyy123"
}

console.log(obj.name)
console.log(obj["surname"])
console.log(obj.surname)

console.log(typeof obj.mySymbol)
console.log(typeof obj[mySymbol])


obj.name = "ashu";
// Object.freeze(obj)
obj.name = "yashu"
console.log(obj)

obj.greeting = function() {
    console.log("hello world")
}

console.log(obj.greeting())


obj.greetingTo = function() {
    console.log(  `hello ${this.name}`)
}

console.log(obj.greetingTo())