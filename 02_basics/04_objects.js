
const tinderUser = {}


tinderUser.id = "123abc"
tinderUser.email = "tinder@gmail.com"
tinderUser.isLoggedin =true

// console.log(tinderUser)


const regularUser = {
    userId: "asdf123",
    fullName : {
        userfullName: {
        firstName : "Ayush",
        lastName : "shrivastava"
    }}
}

// console.log(regularUser.fullName)


const obj1 =  {
    1: "a",
    2: "b"
}

const obj2 = {
    3:"c",
    4:"d"
}


const obj3 = Object.assign({},obj1,obj2)

// console.log(obj3)

const obj4 = {...obj1,...obj2}
// console.log(obj4)



console.log(tinderUser);
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));



console.log(tinderUser.hasOwnProperty('email'));








//****************Destructuring************************/


const course = {
    courseName: "js",
    price : "999",
    faculty : "asasdfa"
}

// console.log(course.faculty)

const {price} = course
console.log(price)