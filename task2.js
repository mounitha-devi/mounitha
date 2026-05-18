console.log("Hello console")
function submit_data(){
    let username=document.getElementById("raji").value;
    let Email=document.getElementById("jyothi").value;
    console.log(username)
    console.log(Email)
    let mooni=document.getElementById("leela");
    let mouni=document.getElementById("shiva");
    if(username==="mounitha"&& Email.includes("mouni@gmail.com")){
        console.log(mooni);
        mooni.textContent=username+  " "+Email;
        mouni.appendChild(mooni);

    }

    }