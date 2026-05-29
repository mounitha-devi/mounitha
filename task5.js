console.log(`Hello,
    Good morning`);
function click_on(){
let one=document.getElementById("task").value;
let p=document.getElementById("task_on");

fetch("https://jsonplaceholder.typicode.com/posts/15")
.then(res=>res.json())
.then(data=>{p.textContent=data.title
console.log(data)});
}
