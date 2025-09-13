// Types of data type in js -> 1. Primitive 2. Non Primitive



//Primitive - 7 Types
// String, Boolean, Number, Bigint, Symbol,null, undefined
// All the primitive data types are of call by value


//Non-primitive (Reference)
//Array, Objects, Functions

//JS is dynamically typed language meaning that the data types of variables are determined at runtime based on the values they hold, rather than being fixed at compile time

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId) //false


const bigNumber = 123412311231231231n //n auto converts to big Int


const heros = ["asdf", "asdffasdf", "asdfadsfad"];

let myObj = {
    name: "ayush",
    age: 18 
}



const myFunction = function() {
    console.log("hlo world")
}
myFunction()

console.log(typeof bigNumber)

console.log(typeof heros)
console.log(typeof myFunction)
console.log(typeof myObj)