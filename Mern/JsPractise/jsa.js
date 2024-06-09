// variables
// var name1  = "Mj"
// {
//     name1 = "mihir";
//     console.log(name1); // mihir
// }
// console.log(name1); // mihir 



// es^6 version

// let name1 = "Mihir";
// {
//     let name1 = "Nitya"
//     console.log(name1); //nitya
// }
// console.log(name1); // mihir

// const a = 5;
// {
//     const a = 7;
//     console.log(a);  // 7
// }
// console.log(a); // 5



// global scope and local scoping
// lexical scope & closures
// function A(){
//     let name  = "mihir"
//     function B(){
//         let name1 = "Mihir1"
//         console.log(name);  // mihir
//     }
//     B();
//     console.log(name); // 
// }
// A();


// loops

// let arr = [1,2,3,4,5,7]


// console.log(arr.splice(0,1,"A"));
// console.log(arr);
// let arr1 = [2,4];
// arr.concat(arr1);
// console.log(arr1);
//  M - 1257


// console.log(arr); //1,2,3,4,5,7
// console.log(arr.length);

// console.log(arr.slice(1,3));
/// MANan -> 12, v -> 1,2 , shub -> 1,2 | 2,3
// arr.slice(1,3) // 2,3 // reflect changes
// console.log(arr); 
// console.log(arr.slice(0,5));


// loops
let arr1 = [1,2,3,4,5];


console.log(arr1.map((ele) =>ele+1));
console.log(arr1.filter((ele) => ele > 2));
console.log(arr1.reduce((ele,index) => ele+index,0))
arr1.forEach((ele,index,arr) => {
    console.log(`index  ${ele}`); 
})


// for(let i=0;i<arr1.length;i++){
//     console.log(arr1[i]);
// }

// 1,2,3,4,6

// let index = 0;
// while(index < arr1.length){
//     console.log(arr1[index]);
//     index++;
// }




