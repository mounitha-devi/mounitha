let a=Math.random();
console.log(a);
let b=a*100
console.log(b);
console.log(Math.ceil(b));
console.log(Math.floor(b));

let mam=document.createElement('h1');
mam.textContent="Hii sayta mam";
console.log(mam);
document.body.appendChild(mam);
let chinna=document.createElement('p');
chinna.textContent="javascript is a intresting concept";
console.log(chinna);
let c=document.getElementById("one");
one.appendChild(chinna);
let p=document.body;
let m=document.getElementById("two");
p.removeChild(m);
let header_one=document.getElementById("three");
header_one.classList.add("hii");
console.log(header_one);
let header_two=document.getElementById("four");
header_two.classList.remove("hello");
console.log(header_two);

