console.log("hii")
let mom=document.getElementById("one_on");
let dad=document.getElementById("two");
function data(){
    dad.innerHTML=mom.value;
    console.log(mom.value);
}
mom.addEventListener("input",data);
mom.addEventListener("focus",data);
mom.addEventListener("change",data);
mom.addEventListener("blur",data);

let mom1=document.getElementById("two_of");
function mouse(){
    mom1.style.color="pulm";
    mom1.style.backgroundColor="hotpink";
}
 mom1.addEventListener("mouseover",mouse);

 let button=document.getElementById("two_one");
 function mouse1(){
    button.style.color="white";
    button.style.backgroundColor="red";
 }
 mom1.addEventListener("mouseout",mouse1);

 let date=new Date();
 console.log(date);

 let date1=new Date()
 console.log(date1.getFullYear());

 let date2=new Date();
 console.log(date2.getMonth()+1);

 let date3=new Date();
 console.log(date3.getHours());

 let date4=new Date();
 console.log(date4.getMilliseconds());

 let date5=new Date();
 console.log(date5.getSeconds());

 let date6=new Date();
 console.log(date6.toLocaleTimeString());

 let date7=new Date();
 console.log(date7.getDay());

 let date8=new Date();
 console.log(date8.getMinutes());

 let date9=new Date();
 console.log(date9.getDate());

 let today=new Date();
 console.log(today.toLocaleDateString());