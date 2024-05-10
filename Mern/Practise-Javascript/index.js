// import fetch from "node-fetch";
/* question:- console - Hello world */

// const { count } = require("console");

// console.log("Hello World");

// let greet = "Hello World";
// console.log(greet);

/* question:-  Print 1 to 5 Number */

// for(let i=1;i<=5;i++){
//     console.log(i);
// }

// i=1;
// while(i<=5){
//     console.log(i);
//     i++ ;
// }


// let i=1;
// do{
//     console.log(i);
//     i++ ;
// }while(i<=5);

/* question:-  write a function to add two numbers and return the result */

// function addTwoNumber (a,b){
//     const answer = a+b;
//     return answer;
//     // return a+b;
// }

// const solution = addTwoNumber(2,5);
// console.log(solution);

/* question :- write a function calculate to find area of rectangle  */

// function calculateRectangle(width,height){
//     return width*height;
// }

// const areaOfRectangle = (width,height)=>{
//     return width*height;
// }

// console.log(areaOfRectangle(5,6));
// console.log(calculateRectangle(5,6));

/* question:-  write a function that takes a string a return a reversed version of it*/

// function returnString(str){
//     return str.split("").reverse().join("");
//     // split -> word split hogye 
//     // reverse -> strng reverse hogi
//     // join ->  join hogi wps string
// }
// console.log(returnString("mihir"));


/* question:-  write a function check if a number is even or odd*/

// const evenOdd = (num)=>{
//     if(num%2 == 0){
//         return `Number is even ${num}`;
//     }else{
//         return `Number is Odd ${num}`;
//     }
// }

// console.log(evenOdd(0));

/* question:-  write a function that return year is leap or not */
// const leapYear = (year)=>{
//     if(year%4 === 0 && year%100 !==0 || year%400 === 0){
//         console.log("this is an leap year");
//     }else{
//         console.log("this is not an leap year");
//     }
// }
// leapYear(2024);


/* question :- find the sum of all elements in array */
// const array = [1,2,3,4,5];
// const additon = array.reduce((acc,val)=>{
//     return acc + val;
// },0)

// console.log(additon);
// let sum=0;
// for (let i=0;i<array.length;i++){
//     sum += array[i];
// }
// console.log(sum);

/* question:-  create an object reprsenting a car with properties like make , model and year and add a method to start the engine*/

// const car ={
//     make : "Mihir",
//     model : "2.0",
//     year : 2001,
//     engine :  function (){
//         console.log(`engine is started with ${this.model} , ${this.make} , ${this.year}`);
//     }
// }

// console.log(car.engine());

/* question:-  change the text of paragraph on webpage using javascript */


{/* <body style="background-color: #212121 ;color:azure">
    <p id="text"> Hi this is mihir<span style="display: none;"> hi</span> Jain</p>
</body>
    <script> 
        const text = document.querySelector('#text');
        // console.log(text.innerHTML); // text ke sath span tag bhi ayega
        // console.log(text.textContent); // only jo text ke sath sath jo intenal span tag woh bhi ayega show woh ayega
        // console.log(text.innerText); // jo only show h woh content ayega
        text.innerHTML = "Mihir Jain";
        console.log(text.innerHTML);

    </script>
</html> */}

/* question:-  create a button dynamically and add the button on webpage */

{/* <script>
const addButton = document.createElement('button');
addButton.style.display= "flex";
addButton.style.border ="1px";
// addButton.style.padding = "5px";
addButton.title = "Button";
addButton.innerText = "Button";
div.appendChild(addButton);
// div.innerHTML = "Mihir"
const addText = document.createTextNode("Mihir Jain");
div.appendChild(addText);
document.body.appendChild(div);
</script> */}


/* question :- add event listener to button when click it happen the alert */

// addButton.addEventListener('click',(e)=>{
//     console.log(e);
//     alert("Clicked In this Button");
// })

/* question :- write a function that calculates the factorial of an given number */

// fact of 0  -> 1
// fact of 1 - > 1
// const findFactorial = (num)=> {
//    console.log(num);
//    if(num === 0 || num === 1){
//     return 1; 
//    }else {
//     let fact = 1;
//     for(let i=1;i<=num;i++){
//         fact*=i; // fact = fact * i;
//     }
//     return fact;
//    }
// }
// console.log(findFactorial(5));


/* create a function that genrates a random number in given range */

// const randomNumber = (min,max)=> {
//     // return Math.floor((Math.random()*50+1)+50); 
//     return Math.floor((Math.random()*(max-min+1)+min));   
// }
// console.log(randomNumber(50,100));



/* write a function that takes an array of number and returns a new array with only the even number */

// let arr = [10,21,31,43,50,60,70];

// const evenArray = (arr)=>{
//     newarr = []
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] % 2 === 0){
//             newarr.push(arr[i]);
//         }
//     }
//     return newarr;
// }
// console.log(evenArray(arr));

// console.log(arr);

// const evenArr = arr.filter((num)=>{
//   return num%2==0;  
// })
// console.log(evenArr);

// function filterEvenNumber(arr){
//     return arr.filter(num => num%2 === 0 );
// }
// console.log(filterEvenNumber(arr));



/* use map() to double all the elements in an array */

// let arr = [1,2,3,4,5];

// const doubleArray = arr.map((num)=> {
//     return num*2;
// })
// console.log(arr);
// console.log(doubleArray);

/* find the largest element in an array using the reduce() method */

// let arr = [10,20,30,2,100];
// const largestElement = arr.reduce((max,cuurVal) => {
//     return cuurVal > max ? cuurVal : max;
// })

// console.log(largestElement);


/*  remove all the occurence of a specific element from an array */

// function removeOccurence (arr){
//     return arr.filter(item => item != target);
// }   

// let arr = [12,12,10,20,12,10];
// let target = 10;
// console.log(removeOccurence(arr,target));

/* create a function that displays the current date and time in a specific format */

// function getCurrentDate(){
//     // console.log(Date());
//     return Date();
// }
// console.log(getCurrentDate());

/* implement a try catch block to handle an error that occurs during api data fecthing */


// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json();
//         console.log(data);
//     } catch(error){
//         console.log("E :",error);
//     }
// }
// getAllUsers();


/* write a recursive function to return a factorial of an given number */

// function fact (num){
//     if(num==0 || num==1){
//         return 1;
//     }
//     return num*(fact(num-1));
// }
// console.log(fact(5));

/* write a recursive function to find nth fibonacci number */

// function fibo (n){
//     if(n<=1){
//         return n;
//     }
//     else {
//         return fibo(n-1) + fibo(n-2);
//     }
// }
// console.log(fibo(6));

/* create a counter function using closures that increments and return the count on each call */

// function counter(){
//     let count = 0;
//     return function(){
//         return ++count;
//     }
// }

// let counter1 = counter();
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());

/* implement a private variable using closures */

// function createcounter(){
//     // private variable
//     let count = 0;
//     // inner function closure
//     function increment() {
//         count++ ;
//         console.log("count : " , count);
//     }
//     return {
//         incrementCounter:function(){
//             increment();
//         },
//         getcount : function(){
//             return count;
//         }
//     }
   
// }

// let counter = createcounter();
// console.log(counter);

/* create a prototype for a product object with properties like name , price and quantity ,
Add a method to the product prototype to calculate the total value */

// function product (name , price , quantity){
//     this.name = name;
//     this.price = price;
//     this.quantity = quantity;
// }

// product.prototype.totalprice = function() {
//     const total1 = this.price * this.quantity;
//     return `the total price is ${total1}`;
// }

// const total = new product("laptop","10","5");
// console.log(product.prototype);
// console.log(total);
// console.log(total.totalprice());


/* implement a function that makes multiple api calls and processes the data using callbacks */
// function makeApi(url,callback){
//     fetch(url)
//     .then(response => {
//         return response.json();
//     })
//     .then(data => callback(data))
//     .catch(error => console.log('error'));
// }
// function handleData(data){
//     console.log(data);
// }
// function main(){
//     const addurl1 = 'https://jsonplaceholder.typicode.com/users';
//     const addurl2 = 'https://jsonplaceholder.typicode.com/users';
//     makeApi(addurl1,handleData);
//     makeApi(addurl2,handleData);
// }
// main();


/* rewrite the privious exercise using promises */

// function makeApi1(url){
//     fetch(url)
//     .then(response => response.json())
//     .then(date => console.log(data))
//     .catch(err => console.log("this is an error"));
// }

// function main(){
//     const addurl1 = 'https://jsonplaceholder.typicode.com/users';
//     const addurl2 = 'https://jsonplaceholder.typicode.com/users';
//     makeApi1(addurl1);
//     makeApi1(addurl2);
// }
// main();

/* use promises to load multiple images asynchronously and display them on a webpage */

// <div id="imageContainer"></div>
// <script >
//     function loadImage(src){
//         return new Promise((res,rej) =>{
//             let img = new Image(500,500); // constructor function image()
//             img.onload = function(){
//                 res(img);
//             };
//             img.onerror = function(){
//                 rej(new Error("failed "+ src));
//             }
//             img.src = src;
//         })
//     }
//     let imageContainer = document.getElementById("imageContainer");
//     let imageUrl = ["../image/1.jpg","../image/2.jpg","../image/3.jpg"];
//     Promise.all(imageUrl.map(loadImage)).then(image => {
//         image.forEach(image => imageContainer.appendChild(image));
//     }).catch(error => console.log(error));
// </script >


/* use async & await to load multiple images asynchronously and display them on a webpage */
// function loadImage(src){
    //         return new Promise((res,rej) =>{
    //             let img = new Image(500,500); // constructor function image()
    //             img.onload = function(){
    //                 res(img);
    //             };
    //             img.onerror = function(){
    //                 rej(new Error("failed "+ src));
    //             }
    //             img.src = src;
    //         })
    //     }

// async function loadimages(){
//     let imageContainer = document.getElementById("imageContainer");
//     let imageUrl = ["../image/1.jpg","../image/2.jpg","../image/3.jpg"];
//     try{
//         const images = await Promise.all(imageUrl.map(loadImage));
//         images.forEach(image => imageContainer.appendChild(image));
//     }catch(error){
//         console.error("error");
//     }
// }
// loadimages();




/* implement an async function to fetch data from an API and handle errors using try/catch */


// async function apiFetch(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         if(!response.ok){
//             throw new error("Request Failed with status "+response.status);
//         }
//         return await response.json();
        
//     }catch{
//         console.error("Error Found");
//     }
// }
// apiFetch().then(data => console.log(data));

/* create an image gallery using dyanmically elements */

// function CreateImageElement(src) {
//     let img = document.createElement('img');
//     img.src = src;
//     return img;
// }
// let gallery = document.getElementById("gallery");
// let imageUrl = ["../image/1.jpg","../image/2.jpg","../image/3.jpg"];
// imageUrl.forEach(url => gallery.appendChild(CreateImageElement(url)));


/* implement a form validation function that checks if all required fields are filled out */

// <form id="myForm" >
// <label> First Name :</label>
// <input type="text" class="field" name="name" required>
// <label> Email :</label>
// <input type="email" class="field" name="email" required>
// <label> Mob No :</label>
// <input type="number" class="field" name="phno" required>
// <input type="submit"  value="submit">        
// </form>
// <script >
// function validateForm(){
//     let form  = document.getElementById('myForm');
//     if(form.checkValidity()){
//         // const validity = document.getElementsByClassName("field");
//         alert("Form Submitted");
//         form.reset();
//     }else{
//         alert("Form Not Submitted please enter required Field");
//     }
// }
// let form = document.getElementById('myForm');
// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     validateForm();
// })
// // </script >


/* create a multiple nested elements and observe the event bubbling and capturing behaviour*/

{/* <p> Lorem ipsum dolor sit, <span>amet</span> consectetur adipisicing elit. Saepe, quam.
</p>
<script >
    
    let parent = document.querySelector("p");
    let child = document.querySelector("span");
    parent.addEventListener("click",()=>{
        console.log("parent");
    },true);
     */}


/* implement a click event on a parent element that triggers different actions based on which child element was clicked */
{/* <ul id="myList">
<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>
</ul>
<script >

let myList = document.getElementById("myList");
myList.addEventListener('click',(e)=> {
    let clickedElement =  e.target;
    if(clickedElement.tagName === 'LI'){
        console.log("List Item Clicked",clickedElement.textContent);
    }else{
        console.log("Not clicked ")
    }
})
 */}


/* you are tasked with creating a countdown timer using javascript and the setinterval function.The countdown timer should start 
at 1 minute (60 seconds) and update every second until it reaches 00:00 , when the countdown reaches zero, an alert should pop up 
to notify that the countdown is completed */


{/* <h1> Count Down Timer : </h1>
<div id="timer">--:--</div> */}
// const timer = document.querySelector("#timer");
//        let countdownseconds = 60;
//         function updateTimerDisplay(){
//             const minutes = Math.floor(countdownseconds / 60); // minute me change hojaye 
//             const seconds = countdownseconds % 60 ; // isse seconds aajayenge
//             const formattedTime = `${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
//             // we use pad start because we start the timer with 00:00
//             timer.textContent=formattedTime;
//         }
//         function countdown(){
//             if(countdownseconds > 0){
//                 countdownseconds--;
//                 updateTimerDisplay();
//             }else{
//               clearInterval(interval);
//               alert("countdown completed");
//             }
//         }
//         updateTimerDisplay();
//         const interval = setInterval(countdown,1000);


/* write the javascript code to implement the quote changing feature */

{/* <h1> Moivational quotes</h1>
<div id="quoteDisplay">Loading.....</div>
 const quotesDisplay = document.querySelector("#quoteDisplay");
 const quotes = ["Lorem ipsum dolor sit amet.","Losadfjsfsfhnafnkrem ipsum dolor sit amet.","Lorem isagkngasgpsum dolor sit amet."]
 const changingquotes = ()=>{
         const randomIndex = Math.floor(Math.random()*quotes.length);
        quotesDisplay.innerHTML= quotes[randomIndex];
 }
 changingquotes();
 setInterval(changingquotes,2000); */}


/* write a regular expression to validate an email address */

// regex ->  https://regexr.com/
// -> start with /^ yh par regex paste krdo $/

//  const emailRegex = /^[A-Za-z._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//  function validate(email){
//     return emailRegex.test(email);
//  }
//  const email = "john@gmail.com";
//  console.log(validate(email));

/* create a javascript function that generates a 2D array with the specfied number of rows and columns each element in the array 
should contain the sum of its row index and column index , once you've created the array , write two additional functions to display
the array in its orginal form and in reverse */

