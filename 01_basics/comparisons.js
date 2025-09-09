console.log(null>0)
console.log(null>=0)
console.log(null == 0)


console.log(undefined == 0)
console.log(undefined > 0)
console.log(undefined <0)


//The reason is that an equality check == and
//comparisons > < >= <= works differently.
//Comparison convert null to a number, treating it as 0
//That's why null>= 0 is true and null > 0 is false.

console.log(2===2) //true
console.log("2" === 2) //false because "2" is a string
 

//strict check (===) -> This checks the values
//as well as this also checks the datatype

