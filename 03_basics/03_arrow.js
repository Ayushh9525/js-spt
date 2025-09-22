
const user = {
    username : "ayush",
    price : 999,

    welcome: function() {
        console.log(`${this.username},Welcome to the site`)
        console.log(this)
    }
}



// user.welcome()
// user.username = "samwell"
// user.welcome()
// console.log(this)



function one() {
    let username = "asdafsdfa"
    console.log(this)
    console.log(this.username)
}


// one()



const two = () => {
console.log("two fn")
}
// two()


const addTwo = (num1,num2) => { //This is an explicit arrow function 
    return num1+num2
}
console.log(addTwo(11,11))

const addThree = (num1,num2,num3) => num1+num2+num3 //This is an implicit arrow function in which we dont have to write return 
console.log(addThree(11,11,11))

const addFour = (num1,num2,num3,num4) => (num1+num2+num3+num4) //Imlicit we can also write it like this with parenthesis
console.log(addFour(11,11,11,11))

const obj = () => ({username: "Ayush"})
console.log(obj())