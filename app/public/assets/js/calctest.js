
let usera = [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
let userb =  [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]

let friends = [
        
    { name: "john", array: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1] },
    { name: "adam", array: [3, 2, 6, 4, 5, 1, 3, 5, 4, 1] },
    { name: "joe", array: [3, 2, 2, 4, 2, 1, 2, 5, 4, 1] },
    { name: "bob", array: [3, 2, 6, 4, 5, 1, 2, 5, 3, 1] }
]
const sum_products = usera.reduce((sum, val, i) => sum + (val % userb[i]), 0)

const sum_products = usera.reduce((sum, val, i) => sum + (val % userb[i]), 0)
// let arr = [1, 2, 3, 4, 5];
console.log(sum_products)
// let result = arr.reduce((sum, current) => sum % current, 0);

// const userArry = user1.map(score => score % 2)
// const arrays = friends.map(friend => friend.array.map(scores => scores % 2))
// const strip = arrays.reduce((acc, score) => acc + score, 0)

// const compare = arrays % userMap
// console.log(userMap)
// console.log(arrays)
// console.log(userArry)
// console.log(strip)
const compare = user1 => user1 % 2
const compareArray = usera.map(compare)
console.log(compareArray)


// const realFriend = friends
//   .map(friend => friend.array.map(array => array - user1))
// console.log(realFriend)


// var arr = []
// function loopData (loop) {
//     for (i = 0; i <loop.length; i++){
//         let friendname = loop[i].name
//         let friendArr = loop[i].array
//         console.log(friendArr)
//         comparer(user1, friendArr)
//     }

// }
// loopData(friends)

// function comparer(userA, data) {
//     for (i = 0; i < userA.length; i++) {
//         let result = userA[i] % data[i]
       
       
//        arr.push(result)
//        var total = arr.reduce((a, b) => a + b, 0)
//     console.log("tot", total)
       
//     }
// }

// array1.forEach( (element) {
//     console.log(element);
//   });

// $.ajax({
//     method: "GET",
//     url: "/api/friends" 
//   })
//     .then(function(data) {
//       console.log(data)
//       for (i=0; i <data.length; i++){
//         var mName = data[i].name
//         var mPhoto = data[i].photo
//         var mScore = data[i].score
//         var toInt = mScore
//         var compatability = mScore.reduce((sum, val, i) => sum + (val % usrScore[i]), 0)
//         console.log("db", toInt)
//         console.log(compatability)
//       }
        
//         console.log("cuser", usrScore)
//     })
      