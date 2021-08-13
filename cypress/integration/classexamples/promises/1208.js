// let kk = new Promise((resolve, reject) => {
//     let a = 10
//      //a = 30
//     if (a == 10) {
//         resolve('Promise completed')
//     }
//     else {
//         reject('Promise not completed')
//     }

// }).then((mm) => {
//     console.log(mm)
// }).catch((mm) => {
//     console.log(mm)
// })

// or
// kk.then((mm) => {
//     console.log(mm)
// })
// kk.catch((mm) => {
//     console.log(mm)
// })


function add(x, y) {
    console.log(`i am add ${x + y}`)
}
//add(10,10)


let rr = new Promise((resolve, reject) => {

    let info = {
        firstname: 'ravi',
        mobno: 8552082044
    }

    let noinfo = {
        error: 1111,
        message: 'Alert'
    }

    if (info.hasOwnProperty('firstname')) {
        resolve(info)
    }
    else {
        reject(noinfo)
    }
})

rr.then((info) => {
    console.log(info)
    if (info.hasOwnProperty('firstname') && info.hasOwnProperty('mobno')) {
        add(10, 10)
    }
})

rr.catch((noinfo) => {
    console.log(`The error code is ${noinfo.error} and message is ${noinfo.message}`)
})







































































// let cypressA = new Promise((resolve, reject) => {
//     let r = 4
//      //r = 10
//     if (r == 10) {
//         resolve('Promised is fulfilled')
//     }
//     else {
//         reject('Promised not  fulfilled')
//     }

// })
// cypressA.then((message) => {
//     console.log(message)
// }).catch((message) => {
//     console.log(message)
// })



// function add(x, y) {
//     console.log(`I am addded ${x + y}`)
// }

// //add(12, 13)

// let cypressA = new Promise((resolve, reject) => {
//     let info = {
//         firstName: "chinmay",
//         rollNo: 29
//     }
//     let notinfo = {
//         error: 123,
//         message: 'Check the connection'
//     }
//     if (info.hasOwnProperty('firstName')) {
//         resolve(info)
//     }
//     else {
//         reject(notinfo)
//     }

// })
// cypressA.then((info) => {
//     //console.log(info)
//     if(info.hasOwnProperty('firstName') && info.hasOwnProperty('rollNo')){

//         add(12,13)
//     }

// }).catch((notinfo) => {
//     console.log(`The erroe code is ${notinfo.error} and message is ${notinfo.message}`)
// })