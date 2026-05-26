console.log("hello");
let mom=document.getElementById("one_on");
function data(){
    mom.style.backgroundColor="blue";
    mom.style.color="pink";
}
    
mom.addEventListener("mouseover",data);
   let dad=document.getElementById("two_one");
   
function data1(){
    dad.style.backgroundColor="pink";
    dad.style.color="blue";
}
dad.addEventListener("mouseout",data1);
   let bag=document.getElementById("three_one");
   bag.addEventListener("click",moni);
   function moni(){
    document.body.classList.toggle("dark1");
   }
let data2=document.getElementById("shiva");

let para=document.getElementById("bag");
  data2.addEventListener("change",select) 
function select(){
    let first=data2.value;
    para.innerHTML="selected courses:"+ first;
    para.style.color="red";
    para.style.fontSize="20px";
}
let leela=document.getElementById("ganga");
leela.addEventListener("dblclick",raji);
function raji(){
 leela.style.color="navy";
 leela.style.backgroundColor="orange";
}
let date=document.getElementById("four");
let passwords=document.getElementById("four_on");
let ball=document.getElementById("box");
 function jyothi(){
    let length=date.value.length;
    ball.innerHTML="characters :"+length;
    if(length<=5){   
        passwords.innerHTML="weak password";
    }
    else if(length<=8){
        passwords.innerHTML="medium password";
    }
    else{
        passwords.innerHTML="strong password";
    }
 }
 four.addEventListener("input",jyothi);
 let minute=document.getElementById("five_on");
 let date2=new Date();
 minute.innerHTML=date2.toLocaleTimeString();
 let mam=document.getElementById("one");
 let mam1=document.getElementById("one_one");
 function mouni(){
    if(mam.length=" "){
        mam1.innerHTML="requried";
    }
    else{
        mam1.innerHTML===mam.value;
    
    }
}
 
mam.addEventListener("change",mouni);
let mooni=document.getElementById("three");
let mooni1=document.getElementById("three_on");

function mouni1(){
    if(mooni.value.includes(".gmail")){
      mooni1.innerHTML=" ";
    }
    else{
   mooni1.innerHTML="invalid email"
    }
}
mooni.addEventListener("input",mouni1);
let button=document.getElementById("document_1");
let nam=document.getElementById("one");
let nam1=document.getElementById("two");
let nam2=document.getElementById("three");
let nam3=document.getElementById("four");
let nam4=document.getElementById("shiva");
button.addEventListener("submit",button1);
function button1(event){
    event.preventDefault();
    if(nam.value!=""&& nam1.value!=""&& nam2.value!=""&& nam3.value!=""&& nam4.value!=""){
        alert("thanks for registrating the form");
    }
    else{
        alert ("check the form once again??")
    }
 
}
let buttons1=document.getElementById("document_1");
let nam11=document.getElementById("one");
let nam12=document.getElementById("two");
let nam13=document.getElementById("three");
let nam14=document.getElementById("four");
let nam15=document.getElementById("shiva");
buttons1.addEventListener("reset",button11);
function button11(event){
   
    if(nam11.value!=""&& nam12.value!=""&& nam13.value!=""&& nam14.value!=""&& nam15.value!=""){
        alert("all the data was cleared");
    }
    else{
        alert ("check the data once again??")
    }
 
}