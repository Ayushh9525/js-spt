const myArr = [0,1,2,3,4,5,6]

const fruits = ["Apple", "Banana", "Pineapple","Watermelon"]

const newArr = new Array(22,2223,44231,1231)

console.log(myArr[0])
console.log(fruits[2])

myArr.push(10)
console.log(myArr)

myArr.pop()
console.log(myArr)

myArr.unshift(10)
console.log(myArr)

myArr.shift()
console.log(myArr)

console.log(myArr.includes(10))

console.log(myArr.indexOf(4))

const newMyArr = myArr.join()
console.log(newMyArr)

console.log(myArr)


console.log("A", myArr)

const myn1 = myArr.slice(0,5)
console.log(myn1)

const myn2 = myArr.splice(1,4)
console.log(myn2)
console.log("b",myArr)