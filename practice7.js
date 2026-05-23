let count=0;
function a(){
    count=count+10;
    console.log(count);
    if(count===120){
        clearInterval(b);
    }
}

let b=setInterval(a,500);
function d(){
    console.log("hello");
}
let time=setInterval(d,5000);
clearTimeout(time);
    console.log("hii picchi jyothi");



    let moni=document.getElementById("one_on");
    function dataentry(){
      let chinna=document.getElementById("mouni").innerHTML="hi,Good afternoon";
      
      console.log(chinna);

    }
    moni.onclick=dataentry;


    let one=document.getElementById("one_of");
    function dataentry_1(event){
         if(event.key==="Enter"){
            console.log("daddy");
         }
        let chinna1=document.getElementById("leela").innerHTML="whatsapp guys";
        
        console.log(chinna1);
    }
    one.addEventListener("click",dataentry_1);
    one.addEventListener("keydown",dataentry_1);
    one.addEventListener("keyup",dataentry);