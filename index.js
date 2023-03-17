// console.log("hello world")

// const result = ages.filter(checkAdult);

// function checkAdult(age) {
//   return age >= 18;
// }


function checkAge(age) {
    return age < 20;
}

// console.log(checkAdult(ages))
const ages = [32, 33, 16, 40];
let hasilFilter = ages.filter(checkAge)
// console.log(hasilFilter)

let arr = []
for(let i =0; i < ages.length; i++) {
    // console.log(ages[i])
    if(checkAge(ages[i])) {
        arr.push(ages[i])
    }
}

// console.log(arr)

function student(name, age, city) {
    console.log(`hi, nama saya ${name}, umur saya ${age}, dan kota saya ${city}`)
}

student("imam", 20, "bandung")
student("kenny", 21, "mars")
student("yana", 10, "jupiter")

function studentData(name, age, city) {
    return `hi, nama saya ${name}, umur saya ${age}, dan kota saya ${city}`
}

console.log("=================================")
console.log(studentData("Ferdy", 77, "Olympus"))

function menghitungDiscount(harga, diskon) {
    return harga * diskon /100
}

function hargaTotal(harga, diskon) {
    let hargaDiskon = menghitungDiscount(harga, diskon)
    return harga - hargaDiskon
} 

console.log("=================================")
console.log(hargaTotal(10000, 30))

function checkGender(gender) { 
    return gender === "female" 
} 
 
function checkIsActive(status) { 
    return status === true 
} 
 
function checkEyeColor(eyeColor) { 
    return eyeColor === "blue" 
} 
 
function chekcAddress(address) { 
    return address === "Bali" 
} 
 
function checkCondition(key, value) { 
    // console.log(key) 
    // console.log(value) 
    return key === value 
} 
 
function loopingData(data) { 
    let arr = [] 
    for (let i = 0; i < data.length; i++) { 
        // if (checkEyeColor(data[i].eyeColor) && chekcAddress(data[i].address)) { 
        //     arr.push(data[i]) 
        // } 
        // console.log(data[i].eyeColor) 
        if (checkCondition("blue", data[i].eyeColor) && checkCondition("Bali", data[i].address)) { 
            arr.push(data[i]) 
        } 
    } 
    return arr 
} 
 
loopingData(person) 


// nitipppppppppp

// 1) display/print person yang registered dibawah tahun 2022
// console.log('[ Data person yang registered dibawah tahun 2022 ]')
// let registered = person.filter(i => {
//     return i.registered.substring(0, 4) < 2022
// })
// console.log(satu)

// 2) display person yang address nya Bali 
// console.log('[ Data person yang address nya Bali ]')
// let dua = person.filter(i => {
//     return i.address === "Bali"
// })
// console.log(dua)

// 3) display friends yang hobby nya football
// console.log('[ Data friends yang hobby nya football ]')
// let tiga = person.map(i => {
//     return i.friends.filter(j => {
//         return j.hobby.filter(k => {
//             k.hobby === 'football'
//         })
//     })
// })
// console.log(tiga)

// 4) display hobby dari friends id 2
// console.log('[ Data hobby dari friends id 2 ]')
// let empat = person.map((i) => {
//   return i.friends.find(j => {
//     return j.id === 2
//   })
// })
// console.log(empat)

// 5) display friends yang gender nya male dan mempunya hobby basketball
// console.log('[ Data hobby dari friends id 2 ]')

// let lima = person.filter((i) => {
//     // console.log(i)
//     return i.friends.filter(j => {
//         return j.gender === 'male' && j.hobby === 'basketball'
//     })
// })

// let result = person.filter(function checkGender(person) {
//     return person.friends.filter(personCocok => {
//         return
//     })
// })
// console.log(result)

// for (let i = 0; i < lima.length; i++) {
//     console.log(lima[i].friends)
// }

// console.log('=============================');

// let lima = person.map(i => {
//     // console.log(i)
//     return i.friends.filter(function checkGender(j) {
//         // console.log(j)
//         if (j.gender === "male") {
//             return j.hobby.filter(function checkHoby(data) {
//                 // console.log(hobby.hobby === "basketball")
//                 return data.hobby === "basketball"
//             })
//         }
//     })
// })

// console.log(lima)

// for (let i = 0; i < lima.length; i++) {
//     // console.log(filterFriends[i].hobby[1])
//     if (lima[i].hobby === "basketball") {

//     }
// }

// 6) display friends yang isActive nya true dan gender nya female dan favorite fruit nya strawberry
// console.log('[ Data friends yang isActive nya true dan gender nya female dan favorite fruit nya strawberry ]')
// let enam = person.filter((i) => {
//   return i.friends.filter(j => {
//     return j.isActive === true && j.gender === 'female' && j.favoriteFruit === 'strawberry'
//   })
// })
// console.log(enam)

// 7) display siapa saja yang mempunya teman name Theresia
// console.log('[ Data siapa saja yang mempunya teman name Theresia ]')
// let tujuh = person.filter(i => {
//     return i.friends.filter(j => {
//         return j.name === "Theresia"
//     })
// })
// console.log(tujuh)

// 8) display hobby id 1 dari friends yang isActive nya true
// console.log('[ Data hobby id 1 dari friends yang isActive nya true ]')
// let delapan = person.filter(i => {
//     return i.friends.filter(j => {
//         return j.isActive === true && j.hobby === 1
//     })
// })
// console.log(delapan)

// 9) display person yang eye color nya brown dan favorite fruit nya banana dan mempunyai teman hobby basketball
// console.log('[ Data person yang eye color nya brown dan favorite fruit nya banana dan mempunyai teman hobby basketball ]')
// let sembilan = person.filter(i => {
//     return i.eyeColor === 'brown' && i.friends.filter(j => {
//         return j.favoriteFruit === 'banana' && j.hobby === 'basketball'
//     })
// })
// console.log(sembilan)

// 10) display person yang mempunya friends gender male atau favorite fruit nya banana dan registered di tahun 2023
// console.log('[ Data person yang mempunya friends gender male atau favorite fruit nya banana dan registered di tahun 2023 ]')