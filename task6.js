
fetch("https://apis.ccbp.in/countries-data/")
.then(res=>res.json())
.then(data=>  {
   let m=document.getElementById("leela");
   data.map(list=>{
    let img=document.createElement("img");
    img.src=list.flag
    let para=document.createElement("p");
para.textContent=list.name

    m.appendChild(img);
    m.appendChild(para);
   })
    console.log((data))});
    