console.log('This is javascript')
function greet(name,greetText = "Greetings from javascript"){
    let name1 = "Name1"
    // console.log(greetText +" " + name) 
    console.log(greetText +" " + name +" "+ name + " is a good boy")
}
function sum(a,b,c){
    let d = a+b+c;
    return d;
    console.log("function is returned") //unreachable 
}
let returnVal = sum(1,2,3);
console.log(returnVal)
// let name  = "AMAN  SINGH"
// let name1  = "Rohan"
// let name2  = "Asagar"
// let name3 = "boys"
// let name4  = "Anitaam"
// let greetText = "good morning"
// greet(name,greetText)
// greet(name2,greetText)
// greet(name3,greetText)
// greet(name4,greetText)
// console.log(name + " is a good boy")
// console.log(name2 + " is a good boy")
// console.log(name3 + " is a good boy")
// console.log(name4 + " is a good boy")
// console.log(name1 + " is a good boy")