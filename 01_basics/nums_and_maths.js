// ******************************** NUMBERS ********************************
const score = 100;
console.log(score)
const num = new Number(1200);
console.log(num)
console.log(typeof num) //object


console.log(num.toString()) //1200
console.log(num.toFixed(2))   //1200.00

const num2 = 12.56789
console.log(num2.toPrecision(3)) //12.6
console.log(num2.toPrecision(4)) 

const num3 = 1000000
console.log(num3.toLocaleString('en-IN'))


// ******************************** MATHS ********************************

console.log(Math);
console.log(Math.PI);
console.log(Math.round(4.6)); //5
console.log(Math.floor(4.6));   //4
console.log(Math.ceil(4.2));    //5
console.log(Math.trunc(4.9));   //4
    
console.log(Math.pow(2,3)) //8
console.log(2**3) //8

console.log(Math.random()) //0 to 0.999999

console.log(Math.floor(Math.random()*10))

min = 10
max =20

console.log(Math.floor(Math.random() * (max-min) )+ min) //10 to 19

console.log(Math.floor(Math.random()* (max-min))+min)