let element=document.querySelector(".demo");
console.log(element);//querySelector

let jyothi=document.querySelectorAll(".demo");
jyothi.forEach((elements) =>{ 
 console.log(elements);//querySelectorAll   
});

let para=document.getElementsByTagName("h5")
let para2=document.getElementsByTagName("h4")
let para3=document.getElementsByTagName("h3")

let para1=document.getElementsByTagName("p")
console.log(para[0])
console.log(para2[0])
console.log(para[0])
console.log(para1[0])//getElementsByTagName

let data=document.getElementsByClassName("demo");
console.log(data.length);//getElementsByClassName

const arr=["mooni" ,18,"developer"];
const [name,age,role]=arr;
console.log(name);
console.log(age);
console.log(role); //array destructuring

const user={
    Name:"satya mam",
    Age:22,
    city:"vijayawada"
};
const {Name,Age,city}=user;
console.log(Name);
console.log(Age);
console.log(city);//object destructuring

const list=[10,20,30,40,50]; 
const sum=list.reduce((acc,item)=>{
    return acc+item;
},0);
console.log(sum);//array reduced method

const array=[1,2,3,4,5,6,7,8,9];
const even=array.reduce((a,item)=>{
    if (item %2===0){
a.push(item);
    }
    return a;
},[]);
console.log(even);//array reduced method in even numbers

let i=0;
while(i<=10){
    console.log(i);//while  loop
    i++;
}
let m=1;
do{
console.log(m);// dowhile  loop
    m++;
}
while(m<=5);   

while(false){
    console.log("hello");
}
function display(...numbers){
console.log(numbers);//rest operator
}
display(11,12,13,14,15);

const mouni=[20,30,10,50,60];
const [a,b,...remaining]=mouni;
console.log(a);
console.log(b);//rest in remaining
console.log(remaining);

const arr1=[1,2,3];
const arr2=[...arr1,4,5];
console.log(arr2);//spread operator

const user1={
    name1:"swathi"
};
const details={
    ...user1,
    age:22
};
console.log(details);

let month=10;
switch(month){
    case 1:
        console.log("january");
    break;
    case 2:
        console.log("march");
    break;
    case 3:
        console.log("april");
    break;
    case 4:
        console.log("may");
    break;
    case 5:
        console.log("june");
    break;
    case 6:
        console.log("august");
    break;
    case 7:
        console.log("september");
    break;
    case 8:
        console.log("october");
    break;
    case 9:
        console.log("november");
    break;
    case 10:
        console.log("december");
    break;
    case 11:
        console.log("july");
    break;
    case 12:
        console.log("february");
    default:
        console.log("invalid month");
}

function save(){
let shiva=document.getElementById("name").value;
localStorage.setItem("age",shiva);
document.getElementById("result").innerHTML="saved";
localStorage.removeItem("age",shiva);
}

let balls=document.getElementById("bat");
let ball1=document.getElementById("btn");
function sms(){
    console.log("div clicked");
}
function sms1(event){
    console.log("button clicked");
    //stop prompugation
}
balls.addEventListener("click",sms,true);
ball1.addEventListener("click",sms1);
//clouers
function outer(){
    let count=0;
    function inner(){
        count++;
        document.getElementById("out").innerHTML=count;
    }
    return inner
}
let count=outer();