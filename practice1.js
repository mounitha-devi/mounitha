console.log("Hello COnsole")
function submit_data(){
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    let email=document.getElementById("email").value;
    let phonenumber=document.getElementById("phonenumber").value;
    let city=document.getElementById("city").value;
    console.log(username)
    console.log(password)
    console.log(email)
    console.log(phonenumber)
    console.log(city)
    let success_msgs=document.getElementById("success_msg");
    let header_con=document.getElementById("header_con");
    if(username==="mouni"|| password==="123"||email==="mouni@gmail.com"||phonenumber==="9247"||city==="pithapuram"){
        success_msg.innerHTML="you logged successfully";
        header_con.style.backgroundColor="hotpink";
        success_msg.style.backgroundColor="red";
        success_msg.style.color="white";
        document.getElementById("one").innerHTML=username;
        document.getElementById("two").innerHTML=password;
        document.getElementById("three").innerHTML=email;
        document.getElementById("four").innerHTML=phonenumber;
        document.getElementById("five").innerHTML=city;
        
}
}

const greet=function(){
    return "hii have a nice day";
};
console.log(greet());




