## JavaScript

# what is javascript ?

- javascript is a scripting language that can be add the functionality in the web pages.

- javascript is a dyanamically typed language.

# why we say this a dynamically typed language ?

- Statical typed language :-  

    In statical typed langauge are those language in which we can define the data types of variables.

```
Example :- 
int a = 6 
float a=2.0
char a='a'

```
- Dynamically typed language :-

    In dynamically typed langauge are those language in which we can not define the data types of variables.

```
Example :-

a=6
var a=6
let a=6
const a=6

```

# Variables :-

- Var :-
    
    Var is a not block scope variable.

```
// In the var we can change the value var 

var a = 6
console.log(a);

var a=7
console.log(a);

// why we this is not block scoped 
// ES5 ENGINE - 2015 - VAR 

var name="Mihir"
{
    var name="Jain"
    console.log(name); // JAIN
    var name = "VIVEK"
}

console.log(name); // VIVEK

var name="Mihir"
{
    var name="Jain"
    console.log(name); // JAIN
    name = "VIVEK"
}

console.log(name); // VIVEK
```

- let 
```
// let is a blocked scoped variable 
// ES6 -> let , const 
// same name variable can not be declared

let a=7
console.log(a);
// let a=8
// console.log(a)  // not declare same name or same type of variable
let b=8
console.log(b);


let name = "Virat"
console.log(name) // Virat 
{   
    // console.log(name) // 
    let name = "Rohit"
    console.log(name) //Rohit
}

console.log(name) // Virat


let c=8
c=9
console.log(c); // 9 we can change the value of variables

```
- const

```
// const is a blocked scoped variable
// we can not change the value of const 
// ES6 

const numberValue = 10 
// numberValue = 11  // Error because we can not change the value of const 
console.log(numberValue);

const name = "Rishi"
{
    const name ="Manan"
    console.log(name); // Manan
}
console.log(name); // Rishi

```

# DataTypes 
- Primitive datatypes
- Non-Primitive Datatypes

Primitive datatypes :-
 



