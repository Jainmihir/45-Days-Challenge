const myObj = {
    game1 : "nfs",
    game2  : "pubg",
}

// for(const [key,value] of myObj){ // object are not iterable with the for of loop
//     console.log(key,value)
// }

for (const key in myObj){
    console.log(`${key} shortcut is for ${myObj[key]}`)
}