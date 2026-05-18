let count=0;
function a(){
    count=count+10;
    console.log(count);
    if(count===200){
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
