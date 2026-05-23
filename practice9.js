let element=document.querySelector(".demo");
console.log(element);//querySelector

let jyothi=document.querySelectorAll(".demo");
jyothi.forEach((elements) =>{ 
 console.log(elements.textContent);//querySelectorAll   
});

let para=document.getElementsByTagName("p")
console.log(para[0])//getElementsByTagName(

let data=document.getElementsByClassName("demo");
console.log(data.length);//getElementsByClassName

const arr=["mooni" ,18,"developer"];
const [name,age,role]=arr;
console.log(name);
console.log(age);
console.log(role);