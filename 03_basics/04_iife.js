
//IIFE => Immediately invoked function expression



(function one () {
    console.log("DB CONNECTED")
})(); //To make this function iife we just have to wrap this functin in a parenthesis and after that just add parenthesis
//And two make two IIFE function in a file we have to add ";" after the execution () of first function
// one()

((name) => {
    console.log(`DB CONNECTED TWO ${name}` )
})("ayush");

