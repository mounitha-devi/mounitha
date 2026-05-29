const person={name:"jyo"};
function greet(city){
    console.log (`Hello${this.name} from${city}`);
}
greet.call(person,"hyd");

const person1={names:"jyosh"};
function greet1(city,country){
    console.log (`Hello${this.names} from${city}${country}`);
}
greet1.apply(person1,["vizag","india"]);

const persons={Name:"jyothi"};
function Greet(city){
    console.log (`Hello${this.Name} from${city}`);
}
const boundFn=Greet.bind(persons,"banglore");
boundFn();
//GET method
const m={
    method:"GET",
    headers:{"Content-Type":"application/json"}
}
fetch("https://jsonplaceholder.typicode.com/posts/",m)
.then(res=>res.json())
.then(data=>{console.log(data)})

//POST
const user={title:"ptp",country:"india"}
const m1={
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(user)
}
fetch("https://jsonplaceholder.typicode.com/posts/",m1)
.then(res=>res.json())
.then(data=>{console.log(data)})

//PATCH
const user1={title:"glp",country:"india"}
const m2={
    method:"PATCH",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(user1)
}
fetch("https://jsonplaceholder.typicode.com/posts/1",m2)
.then(res=>res.json())
.then(data=>{console.log(data)})


const user2={title:"hyd",country:"india"}
const m3={
    method:"PUT",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(user2)
}
fetch("https://jsonplaceholder.typicode.com/posts/4",m3)
.then(res=>res.json())
.then(data=>{console.log(data)})


const user3={title:"Vizag",country:"india"}
const m4={
    method:"DELETE",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(user3)
}
fetch("https://jsonplaceholder.typicode.com/posts/6",m4)
.then(res=>res.json())
.then(data=>{console.log(data)})
