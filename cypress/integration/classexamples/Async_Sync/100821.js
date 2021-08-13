// // For example = Synchronous code  (execution or responce step by step gives)


// function add(x,y){
//     alert("hello")
//     console.log(x+y)
// }
// function sub(x,y){
//     console.log(x-y)
// }
// add(12,13)
// sub(12,33)                     // hello     25   -21    ( this results shows on browser )



// // For example = js made Asynchronous by using setTimeout

// // 1.

// function add (x,y){
//     console.log(x+y)
//     setTimeout(function(){
//         console.log("hello")
//         console.log('alert')

//     },3000)

// }

// function sub(x,y){
//     console.log(x-y)
// }
// add(12,13)
// sub(12,33)                   // 25   -21  hello  alert


// // 2.


// function multiply(){
//     setTimeout(function(){
//         console.log("multiply")
//     },8000)

// }
// function addition(){
//     setTimeout(function(){
//         console.log("addition")

//     },4000)

// }
// function subtraction(){
//     setTimeout(function(){
//         console.log("subtraction")

//     },5000)

// }

// multiply()
// addition()
// subtraction()                              // addition    subtraction      multiply



///////////////////////////////////////////////////////////////////////////////////////////////

// javascript - syncronous           But avoid complication said its Asynchronous
// javascript - Asyncronous            When ajacx code added in javascript    

// cypress commands - Asyncronous
// cypress - execution  - is always synchronus

// In cypress we can  use js code , yes we will make it sync

