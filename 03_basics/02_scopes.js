let a = 10
const b = 20
var c = 20


if(true){
var c = 1111

}

console.log(c)

console.log(a)



function one () {
  const  username = "ayush"

    function two () {
        const web ="youtube"
        console.log(username)
    }
    // console.log(web)
    two()
}

// one()




if(true){
    const user ="ayuush"
    if(true) {
const web =" youtube"
console.log(user+web)
    }
    // console.log(web)
}

// console.log(user)



console.log(addOne(5)) //it works (called before intialization)

function addOne(num){
    return num+1
}


addTwo(4)//declared before initialization

const aas = function addTwo (num3){
    return num3+2
}
