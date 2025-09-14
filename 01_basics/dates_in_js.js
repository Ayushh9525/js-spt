let date = new Date()

console.log(date.toString());
console.log(date.toDateString())
console.log(date.toLocaleDateString())
console.log(date.toLocaleString())
console.log(date.toLocaleTimeString())
console.log(typeof date)

let myCreatedDate = new Date(2025,0,22)
console.log(myCreatedDate.toDateString())
let myCreatedDate2 = new Date("2025-01-12")
console.log(myCreatedDate2.toDateString())


let timeStamp = Date.now()
console.log(timeStamp)
console.log(myCreatedDate.getTime())

console.log(myCreatedDate2.getDay()+1)