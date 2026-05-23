 console.log("hai guys");
 let count;
 let mooni;
 let isRunning=false;
let updated_count;
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
    if(isRunning===true){
    count=updated_count;
    isRunning=false;

}
count--
one.textContent=count;
two.appendChild(one);
if(count===0){
    one.textContent="time exceed";
    one.style.color="red";
    updated_count=count;
    clearInterval(mooni);
    isRunning=false;
}

}
mooni=setInterval(data,1000);
}
 function submit_data1(){
    updated_count=count;
    isRunning=true;
    clearInterval(mooni);
    updated_count=count;
    isRunning=true;
    one.textContent="time out";
    one.style.color="orange";
 }
