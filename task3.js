 console.log("hai guys");
 let count;
 let mooni;
  let one=document.createElement("p");
 function submit_data(){
 let start=parseInt(document.getElementById("first").value);
 let end=parseInt(document.getElementById("last").value);

 let two=document.getElementById("header_a");
 if(start>end){
count=start;
}
else{
    count=end;
}
function data(){
count--
console.log(count);
one.textContent=count;
two.appendChild(one);
if(count===0){
    one.textContent="time exceed";
    one.style.color="red";
    clearInterval(mooni);
}

}
mooni=setInterval(data,1000);
 }
 function submit_data1(){
    clearInterval(mooni);
    one.textContent="time out";
    one.style.color="orange";
 }
