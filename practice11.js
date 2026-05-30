let count=10
function a(){
    count=count+10;
    console.log(count);
}
let b=setInterval(a,2000);

console.log("hello")
const m={
    method:"GET",
    headers:{"Content-Type":"application/json"}
}
fetch("https://jsonplaceholder.typicode.com/posts/",m)
.then(res=>res.json())
.then(data=>{console.log(data)})



let array=[1,2,3,4,5,6,7,8,9,10];
const[c,d,...remaining]=array;
const sum=remaining.reduce((acc,item)=>{
    return acc+item;
},0);
console.log(sum);//array reduced method
fetch("https://apis.ccbp.in/countries-data")

