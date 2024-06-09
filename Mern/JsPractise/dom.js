
// css
let a = document.querySelector('li');
a.style.color = "orange"


// inner text = me jo samne hai wohi dikhega
// textcontent = me jp hidden hai span ke undr woh bhi dikhega
// innerhtml = html ke sath text ad hota hai
// outerhtml = html me like li remove krdeta hai


// replace child 
// const list = document.querySelector('ul');
// const childToChange = list.children[1];
// const newLi = document.createElement('li');
// newLi.textContent="Giga";
// list.replaceChild(newLi,childToChange);




// remove Element
// let removeChild = document.querySelector('.ghr')
// removeChild.remove();



// append child 
// let newChild = document.querySelector('ul');
// const newEle = document.createElement('li');
// newEle.textContent = "superman";
// newChild.appendChild(newEle);


// siblings
// console.log(document.querySelector('.ghr').previousElementSibling);
// var a = document.querySelector('.ghr')
// a.forEach((ele) => console.log(ele.previousElementSibling));

// parentElement
// var parent = document.querySelector('div');
// var p = parent.parentElement;
// console.log(p);
// ek or hota hai parent Node usme woh parent html me document return krta hai lekin yeh null return krta h us case me
// parent.parentNode;



// by tag name
// var tagName = document.getElementsByTagName('li');
// console.log(tagName);

// by id
// var byId = document.getElementById('mihr')
// console.log(byId);


// by name
// var byName = document.getElementsByClassName('ghr')
// console.log(byName);


// query selector
// console.log(document.querySelector('li'));
// console.log(document.querySelector('.ghr'));
// console.log(document.querySelector('#mihr'));

// query selector all
// console.log(document.querySelectorAll('li'));

