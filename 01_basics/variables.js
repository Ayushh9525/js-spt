const accountID = 12345
var accPass = "Aaaayush"
let accountEmail = "ayush@gmail.com"

// accountID = 223312

/*
Var is not preffered because of its issue of block scope and functional scope
*/



accPass = "asdfghjkl"
accountEmail = "something@gmail.com"

console.log(accountID);

console.table([accountID,accountEmail,accPass])