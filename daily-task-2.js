// TODO: 
// Task-2 -> wajib ada minimal 1-2 soal yang menggunakan array method FIND, FILTER atau MAP dalam pengerjaannya.
// Task-3 -> terapin function pada 2-3 soal pada pengerjaan Task-2

const person = [{
        "_id": "641165f0c759f3fc159b341f",
        "age": 20,
        "eyeColor": "green",
        "name": "Hudson Rosales",
        "address": "Bali",
        "registered": "2024-08-31T10:35:01 -07:00",
        "friends": [{
                "id": 0,
                "name": "Shifly",
                "isActive": true,
                "favoriteFruit": "strawberry",
                "gender": "male",
                "hobby": [{
                        "id": 2,
                        "hobby": "baseball"
                    },
                    {
                        "id": 2,
                        "hobby": "baseball"
                    }
                ]
            },
            {
                "id": 1,
                "name": "Shifly",
                "isActive": true,
                "favoriteFruit": "apple",
                "gender": "male",
                "hobby": [{
                        "id": 1,
                        "hobby": "football"
                    },
                    {
                        "id": 1,
                        "hobby": "baseball"
                    }
                ]
            },
            {
                "id": 2,
                "name": "Theresia",
                "isActive": false,
                "favoriteFruit": "strawberry",
                "gender": "male",
                "hobby": [{
                        "id": 2,
                        "hobby": "baseball"
                    },
                    {
                        "id": 2,
                        "hobby": "football"
                    }
                ]
            }
        ]
    },
    {
        "_id": "641165f0be476ad73c7f3538",
        "age": 32,
        "eyeColor": "blue",
        "name": "Emma Huff",
        "address": "Bali",
        "registered": "2020-07-14T09:39:41 -07:00",
        "friends": [{
                "id": 0,
                "name": "Shifly",
                "isActive": true,
                "favoriteFruit": "banana",
                "gender": "female",
                "hobby": [{
                        "id": 2,
                        "hobby": "football"
                    },
                    {
                        "id": 2,
                        "hobby": "basketball"
                    }
                ]
            },
            {
                "id": 1,
                "name": "Farid",
                "isActive": false,
                "favoriteFruit": "apple",
                "gender": "female",
                "hobby": [{
                        "id": 2,
                        "hobby": "basketball"
                    },
                    {
                        "id": 2,
                        "hobby": "baseball"
                    }
                ]
            },
            {
                "id": 2,
                "name": "Shifly",
                "isActive": true,
                "favoriteFruit": "banana",
                "gender": "female",
                "hobby": [{
                        "id": 1,
                        "hobby": "football"
                    },
                    {
                        "id": 2,
                        "hobby": "basketball"
                    }
                ]
            }
        ]
    },
    {
        "_id": "641439a7e2f7984f3d8fbb47",
        "age": 29,
        "eyeColor": "green",
        "name": "Alexander Long",
        "address": "Bali",
        "registered": "2021-10-26T09:06:48 -07:00",
        "friends": [{
                "id": 0,
                "name": "Farid",
                "isActive": false,
                "favoriteFruit": "strawberry",
                "gender": "male",
                "hobby": [{
                        "id": 1,
                        "hobby": "football"
                    },
                    {
                        "id": 2,
                        "hobby": "basketball"
                    }
                ]
            },
            {
                "id": 1,
                "name": "Theresia",
                "isActive": true,
                "favoriteFruit": "strawberry",
                "gender": "male",
                "hobby": [{
                        "id": 2,
                        "hobby": "basketball"
                    },
                    {
                        "id": 1,
                        "hobby": "basketball"
                    }
                ]
            },
            {
                "id": 2,
                "name": "Theresia",
                "isActive": false,
                "favoriteFruit": "banana",
                "gender": "male",
                "hobby": [{
                        "id": 2,
                        "hobby": "baseball"
                    },
                    {
                        "id": 2,
                        "hobby": "football"
                    }
                ]
            }
        ]
    },
    {
        "_id": "641165f0e7c5b20d1f08524b",
        "age": 38,
        "eyeColor": "brown",
        "name": "Hines Waller",
        "address": "Jakarta",
        "registered": "2022-07-20T11:26:28 -07:00",
        "friends": [{
                "id": 0,
                "name": "Farid",
                "isActive": true,
                "favoriteFruit": "strawberry",
                "gender": "male",
                "hobby": [{
                        "id": 2,
                        "hobby": "football"
                    },
                    {
                        "id": 1,
                        "hobby": "basketball"
                    }
                ]
            },
            {
                "id": 1,
                "name": "Theresia",
                "isActive": false,
                "favoriteFruit": "apple",
                "gender": "male",
                "hobby": [{
                        "id": 1,
                        "hobby": "football"
                    },
                    {
                        "id": 2,
                        "hobby": "basketball"
                    }
                ]
            },
            {
                "id": 2,
                "name": "Farid",
                "isActive": true,
                "favoriteFruit": "strawberry",
                "gender": "male",
                "hobby": [{
                        "id": 2,
                        "hobby": "baseball"
                    },
                    {
                        "id": 1,
                        "hobby": "basketball"
                    }
                ]
            }
        ]
    },
    {
        "_id": "641165f0c92f17d4bf85550d",
        "age": 20,
        "eyeColor": "green",
        "name": "Phyllis Norman",
        "address": "Jakarta",
        "registered": "2021-10-18T10:03:21 -07:00",
        "friends": [{
                "id": 0,
                "name": "Theresia",
                "isActive": true,
                "favoriteFruit": "apple",
                "gender": "female",
                "hobby": [{
                        "id": 1,
                        "hobby": "football"
                    },
                    {
                        "id": 2,
                        "hobby": "football"
                    }
                ]
            },
            {
                "id": 1,
                "name": "Theresia",
                "isActive": false,
                "favoriteFruit": "apple",
                "gender": "female",
                "hobby": [{
                        "id": 2,
                        "hobby": "football"
                    },
                    {
                        "id": 1,
                        "hobby": "football"
                    }
                ]
            },
            {
                "id": 2,
                "name": "Shifly",
                "isActive": false,
                "favoriteFruit": "strawberry",
                "gender": "female",
                "hobby": [{
                        "id": 2,
                        "hobby": "football"
                    },
                    {
                        "id": 2,
                        "hobby": "football"
                    }
                ]
            }
        ]
    },
    {
        "_id": "641165f0fa4ab0951dac9c77",
        "age": 34,
        "eyeColor": "brown",
        "name": "Atkinson Leonard",
        "address": "Jakarta",
        "registered": "2023-01-22T01:35:23 -07:00",
        "friends": [{
                "id": 0,
                "name": "Theresia",
                "isActive": true,
                "favoriteFruit": "apple",
                "gender": "male",
                "hobby": [{
                        "id": 2,
                        "hobby": "baseball"
                    },
                    {
                        "id": 1,
                        "hobby": "football"
                    }
                ]
            },
            {
                "id": 1,
                "name": "Theresia",
                "isActive": true,
                "favoriteFruit": "banana",
                "gender": "male",
                "hobby": [{
                        "id": 2,
                        "hobby": "football"
                    },
                    {
                        "id": 1,
                        "hobby": "football"
                    }
                ]
            },
            {
                "id": 2,
                "name": "Shifly",
                "isActive": true,
                "favoriteFruit": "banana",
                "gender": "male",
                "hobby": [{
                        "id": 2,
                        "hobby": "baseball"
                    },
                    {
                        "id": 2,
                        "hobby": "basketball"
                    }
                ]
            }
        ]
    }
]

// 1) display/print person yang registered dibawah tahun 2022
console.log('=============================================[ 1. Data person yang registered dibawah tahun 2022 ]=============================================')

// FUNCTION
console.log('--------- FUNCTION ---------')

for (let i = 0; i < person.length; i++) {
    if (person[i].registered.substring(0, 4) < 2022) {
        console.log(person[i])
    }
}

function checkRegistered(data, check) {
    return data < check
}

for (let i = 0; i < person.length; i++) {
    checkRegistered(person[i].registered.substring(0, 4), 2022, person[i]);
}

// ARRAY METHOD FILTER
console.log('--------- ARRAY METHOD FILTER ---------')

let filterRegistered = person.filter(i => {
    return i.registered.substring(0, 4) < 2022
})
console.log(filterRegistered)





// 2) display person yang address nya Bali
console.log('=============================================[ 2. Data person yang address nya Bali ]=============================================')

// FUNCTION
console.log('--------- FUNCTION ---------')

for (let i = 0; i < person.length; i++) {
    if (person[i].address === 'Bali') {
        console.log(person[i])
    }
}

function chekcAddress(data, check) {
    return data === check
}

for (let i = 0; i < person.length; i++) {
    chekcAddress(person[i].address, 'Bali', person[i])
}

// ARRAY METHOD FILTER
console.log('--------- ARRAY METHOD FILTER ---------')

let filterAddress = person.filter(i => {
    return i.address === 'Bali'
})
console.log(filterAddress)





// 3) display friends yang hobby nya football
console.log('=============================================[ 3. Data friends yang hobby nya football ]=============================================')

// FUNCTION
console.log('--------- FUNCTION ---------')

for (let i = 0; i < person.length; i++) {
    for (let j = 0; j < person[i].friends.length; j++) {
        for (let k = 0; k < person[i].friends[j].hobby.length; k++) {
            if (person[i].friends[j].hobby[k].hobby === "football") {
                console.log(person[i].friends[j])
            }
        }
    }
}

function checkHoby(data, check) {
    return data === check
}

for (let i = 0; i < person.length; i++) {
    for (let j = 0; j < person[i].friends.length; j++) {
        for (let k = 0; k < person[i].friends[j].hobby.length; k++) {
            checkHoby(person[i].friends[j].hobby[k].hobby, "football", person[i])
        }
    }
}





// 4) display hobby dari friends id 2
console.log('=============================================[ 4. Data hobby dari friends id 2 ]=============================================')

for (let i = 0; i < person.length; i++) {
    for (let j = 0; j < person[i].friends.length; j++) {
        if (person[i].friends[j].id === 2) {
            for (let k = 0; k < person[i].friends[j].hobby.length; k++) {
                console.log(person[i].friends[j].hobby[k].hobby)
            }
        }
    }
}

// ARRAY METHOD MAP
console.log('--------- ARRAY METHOD MAP ---------')

let findHobby = person.map((i) => {
  return i.friends.find(j => {
    return j.id === 2
  })
})
console.log(findHobby)



// 5) display friends yang gender nya male dan mempunya hobby basketball
console.log('================================[ 5. Data friends yang gender nya male dan mempunya hobby basketball ]================================')

for (let i = 0; i < person.length; i++) {
    for (let j = 0; j < person[i].friends.length; j++) {
        for (let k = 0; k < person[i].friends[j].hobby.length; k++) {
            if (person[i].friends[j].hobby[k].hobby === 'basketball' && person[i].friends[j].gender === 'male') {
                console.log(person[i].friends)
            }
        }
    }
}





// 6) display friends yang isActive nya true dan gender nya female dan favorite fruit nya strawberry
console.log('========================[ 6. Data friends yang isActive nya true dan gender nya female dan favorite fruit nya strawberry ]===========================')

for (let i = 0; i < person.length; i++) {
    for (let j = 0; j < person[i].friends.length; j++) {
        if (person[i].friends[j].isActive === true && person[i].friends[j].gender === 'female' && person[i].friends[j].favoriteFruit === 'strawberry') {
            console.log(person[i].friends[j])
        }
    }
}





// 7) display siapa saja yang mempunya teman name Theresia
console.log('========================[ 7. Data siapa saja yang mempunya teman name Theresia ]===========================')

for (let i = 0; i < person.length; i++) {
    for (let j = 0; j < person[i].friends.length; j++) {
        if (person[i].friends[j].name === 'Theresia') {
            console.log(person[i].name)
        }        
    }    
}





// 8) display hobby id 1 dari friends yang isActive nya true
console.log('========================[ 8. Data hobby id 1 dari friends yang isActive nya true ]===========================')

for (let i = 0; i < person.length; i++) {
    for (let j = 0; j < person[i].friends.length; j++) {
        if (person[i].friends[j].isActive === true) {
            for (let k = 0; k < person[i].friends[j].hobby.length; k++) {
                if (person[i].friends[j].hobby[k].id === 1) {
                    console.log(person[i].friends[j].hobby)
                }
            }
        } 
    }  
}





// 9) display person yang eye color nya brown dan favorite fruit nya banana dan mempunyai teman hobby basketball
console.log('========================[ 9. Data person yang eye color nya brown dan favorite fruit nya banana dan mempunyai teman hobby basketball ]===========================')

for (let i = 0; i < person.length; i++) {
    if (person[i].eyeColor === 'brown') {
        for (let j = 0; j < person[i].friends.length; j++) {
            for (let k = 0; k < person[i].friends[j].hobby.length; k++) {
                if (person[i].friends[j].hobby[k].hobby === "basketball" && person[i].friends[j].favoriteFruit === "banana") {
                    console.log(person[i].name)
                }
            }
        }
    }
}





// 10) display person yang mempunya friends gender male atau favorite fruit nya banana dan registered di tahun 2023
console.log('========================[ 10. Data person yang mempunya friends gender male atau favorite fruit nya banana dan registered di tahun 2023 ]===========================')

for (let i = 0; i < person.length; i++) {
    for (let j = 0; j < person[i].friends.length; j++) {
        if (person[i].friends[j].gender === 'male' || person[i].favoriteFruit === 'banana' && person[i].registered.substring(0, 4) === 2023) {
            console.log(person[i].name)
        }
    }
}