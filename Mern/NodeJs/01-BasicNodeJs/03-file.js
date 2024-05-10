const fs = require("fs");
const os= require("os");

// sync -> create and write file sync..
// fs.writeFileSync("./text.txt","hello world!");

//aync -> create and write file async..
// fs.writeFile("./text.txt","hello world async" , (err) => {});

// Read File -> sync  -> return result krdega
// const result = fs.readFileSync("./text.txt","utf-8")
// console.log(result);

// Read File -> async -> lekin yeh kuch bhi return nhi krta isme call back except krega
// fs.readFile("./text.txt","utf-8",(err,result)=> {
//     if(err){
//         console.log("Error",err);
//     }else{
//         console.log(result);
//     }
// })

// Append the data in the file
// fs.appendFileSync("./text.txt",`${Date.now()} hello there is mihir \n`)

// copy file
// fs.copyFileSync('./text.txt','./copy.txt');

// delete file
// fs.unlinkSync('./copy.txt')

// statics of file
// console.log(fs.statSync('./text.txt').isFile());

// fs.mkdirSync('mydocs')

// fs.mkdirSync("mydocs/a/b", {})


// fs.mkdirSync("mydocs/a/b", {recursive: true});

// Os -> max thread size will be 4 
console.log(os.cpus().length); 

