let default_width=100;
default_height=100;
let image_bird=document.getElementById("image_bird")
function click_onn(){
       default_width=default_width+30
       image_bird.style.width=default_width+"px";
default_height=default_height+30
image_bird.style.height=default_height+"px";
let click_onn=document.getElementById("click_onn");
if(default_width>=300 && default_height>=300){
        default_width=300; default_height=300;
        click_onn.innerHTML="you exceed the limit";
        click_onn.style.backgroundColor="yellow";
    }
}
function click_off(){
    default_width=default_width-10
    image_bird.style.width=default_width+"px";
    default_height=default_height-10
    image_bird.style.height=default_height+"px";
    let click_off=document.getElementById("click_off");
    if(default_width<=100 && default_height<=100){
        default_width=100; default_height=100;
        click_off.innerHTML="you can't decrease width";
        click_off.style.backgroundColor="coral";
        
    }
}
