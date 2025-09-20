function hello() {
    console.log("say hello")
}
// hello()



function add (num1, num2) {
    console.log(num1+num2)
}

// add(1,"2")
// result = add(1,2)
// console.log(result)

function add (num1, num2) {
result = num1+num2
return result
}

// resul = add(1,1)
// console.log(resul)



function userLogin(username="Ayush"){
    if(!username){
        console.log("Enter a valid name")
        return
    }
   return `${username} just logged in`
}

// console.log(userLogin("sadfa"))


function cartValue (...num1) {
    return num1
}

console.log(cartValue(10000,22222))




user = {
    username: "Ayush",
    price: 999
}

function handleobject(anyobject) {
    console.log(`${anyobject.username} just bought an item of ${anyobject.price} Rupees.`)
}
handleobject(user)



const myNewArray = [1,2,34,12,132,132,]

function getValueOfarray(getArray) {
    return getArray[1]
}
console.log(getValueOfarray(myNewArray))