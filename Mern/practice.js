// console.log("Hi");



// var a = "Mihir"
// console.log(a);

// var a = "Mihir"
// {
//     a = "jain";
//     console.log("Jain");
// }
// console.log(a);

// let b = "Jain"
// {
//     let b = "New";
//     console.log(b);
// }
// console.log(b);

// const c = "Mihir";
// {
//     const c = "Mihit";
//     console.log(c);  
// }
// console.log(c);




// fetch("https://api.github.com/users")
// .then((res) => res.json())
// .then((data) =>  console.log(data))
// .catch((err) => console.log({Error : 'Nahi Hoga Fetch'}));


// const promise = fetch("https://api.github.com/users")

// promise.then((res) => res.json())
// .then((data) => console.log(data))
// .catch((err) => console.log("naj"));

async function apiFetch() {
    try{
        const response = await fetch("https://api.github.com/users");
        const data = await response.json();
        console.log(data);
    }catch(err){
        console.log("Nh");
    }
}

// const answer = apiFetch();
// console.log(answer);

// apiFetch().then((data) => {
//     if(data) {
//         const usernames = data.map((user)=> user.login);
//         console.log(usernames);
//         
    //   console.log(" this is filter");

//         const userid = data.filter((user) => user.id>10)
//         console.log(userid);

//         console.log("this is reduce");
//         const sumOfAllUsers  = data.reduce((count,user) => count+1,0);
//         console.log(sumOfAllUsers);

//     }
// })


const arr = [1,2,3,4,5];
newarr = []

console.log(arr.map((ele) => ele+1));

console.log(arr.filter((ele) => ele > 2));

console.log(arr.reduce((acc,val) => acc+val,0));


// for(let i=0;i<arr.length;i++){
//     newarr.push(arr[i]);
// }
// console.log(newarr);

// i=0;
// const n = arr.length;
// while(i < n){
//     newarr.push(arr[i]);
//     i++;
// }
// console.log(newarr);
