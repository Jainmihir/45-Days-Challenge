



// callback -> ek function ke undr dusre function ko call krte hai

// function func(val){
//     console.log(val);
// }

// function add(val,callback){
//     let sum = val+val;
//     callback(sum);
// }

// console.log(add(4,func));


// setTimeOut

// let val = setInterval(() => {
//     console.log("Mihir");
// },1)

// setTimeout(() => {
//     clearInterval(val);
// },1000);

// setTimeout(()=> {
//     console.log("Hello i am inside settimeout");
// },1000)
// console.log("Hi i am outside")

// recursion

// function fact(n){
//     if(n==0){
//         return 1;
//     }
//     else{
//         return n*fact(n-1);
//     }
// }
// console.log(fact(5));

// function Fibo(n){
//     if(n==0){
//         return 0;
//     }else if(n==1){
//         return 1;
//     }else{
//         return Fibo(n-1)+Fibo(n-2);
//     }

// }
// console.log(Fibo(5));


// this 


// function App(){
//     let fname = "mihir"
//     this.fname = fname;
// }
// var newObj  =  new App();
// console.log(newObj.fname);

// console.log(App());




// let obj = {
//     "name" : "Mihir",
//     fun  : function(){
//         console.log(this);
//     }
// }

// console.log(obj.fun());

// sets  
// const arr = [1,2,2,3];
// const set = new Set(arr);
// set.add(2);
// console.log(set);


// objects in arrays 

// let obj = [
//     { id : 1 , name :  "Mihir"},
//     { id: 2  , name : "Jain"},
// ]

// for(let values in obj){
//     console.log(obj[values]);
// }

// for(let values of obj){
//     console.log(obj.name);
// }




// Objects

// let obj = {
//     "name" : "Mihri",
//     "class" : "AllTimePas",
//     fun :  function(){
//         console.log("Hello");
//     },
//     arr : [2,2,2],
// }

// for(let i in obj){
//     console.log(obj[i]);
// }

// for(let i of Object.keys(obj)){
//     console.log(obj[i]);
// }

// console.log(obj.arr);
// console.log(obj);
// console.log(obj.fun());






// Array destructing

// let arr1 = ["mihri" , "jain" , "Lokit"];

// let [item1,...item2] = arr1
// console.log(item1);
// console.log(item2);

// let item1 = arr1[0];
// console.log(item1);



// copy and spread

// let arr1 = [1,2,3];
// let arr2 = [...arr1];
// arr2.push(1);
// console.log(arr1);


// let arr1 = [1,2,3];
// let arr2 = arr1;
// arr1.push(3);
// console.log(arr1);
// console.log(arr2);




// 2d arrays

// let array2d = [
//     [1,"Mihir"],[2,"Jain"]
// ]

// for(let i=0;i<array2d.length;i++){
//     for(let j=0;j<array2d.length;j++){
//         console.log(array2d[i][j]);
//     }
// }


// All Loops

// let arr = [1,2,3,4];

// for(let value in arr){
//     console.log(arr[value]);
// }

// for(let value of arr){
//     console.log(value);
// }

// arr.forEach(function(currrent,index,arr){
//     console.log(currrent);
//     console.log(index);
//     // console.log(arr);
// })

// console.log(arr.map((ele) => ele+1));
// console.log(arr.reduce((acc,val) => acc+val,0));
// console.log(arr.filter((ele) => ele > 2));





// Arrays

// let name = [1,2,3];
// console.log(name);

// let name1 = ["Mihir", "ek " , "coder"];


// name1.shift() // delete first
// name1.unshift("Mj")
// console.log(name1);

// name1.push("Mihir Jain");
// console.log(name1);

// name1.pop();
// console.log(name1);

// console.log(name1.slice(0,2)); //-1 indexes print
// console.log(name1);

// console.log(name1.splice(2,3)); // it deletes the values form and array and return same values
// console.log(name1);

// let name2 = ["Mihir", "jain"];
// const ans = name1.concat(name2);
// console.log(ans);

// console.log(name1.length);

// console.log(name1.indexOf("Mihir"))
// name1.reverse();
// console.log(name1);


// name1.sort();
// console.log(name1);



// type conversion
// console.log("4" - 1); // 3
// console.log("4" + 1); // 4
// console.log("4"+"5"); // 45

// types : 

// function Hello(){

// }
// console.log(typeof Hello) // function
// console.log(typeof null); // function
// console.log(typeof Object); //object
// console.log(typeof String); // function

// simple Helloworld
// console.log("Hello World")






