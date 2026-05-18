function greet(name="moni"){
        console.log("welcome"+ name);
    }
    greet();

     let chinna=function(name="guest",subgreet){
        console.log("welcome"+name);
     }
     function subgreet(){
        console.log("hello develoer")}
     chinna("satya",subgreet())
     chinna("mounitha",subgreet())
     chinna("satyamam",subgreet())


    let add=function(a,b){
        console.log(a+b);
    };
    add(27,15);


    function sub(a,b){
        return(a-b);

    };
    let result=sub(2,8);
    console.log(result);


    const mouni=function(){
    return "hii have a nice day";
};
console.log(mouni());

function shivaleela(name){
    console.log("hello"+name);

}
shivaleela("nani");


let numbers=[10,20,30,40,50];
console.log(numbers.find(n=>n>30));

let array=[1,2,3,4,5,6,7];
console.log(array.includes(8));

let data=["satya","jyothi","mouni"];
console.log(data.indexOf("mouni"));

let num=[1,2,3,4,5,6,7];
console.log(num.slice(3,7));

let s=[2,6,4,3,7];
let dd=s.splice(4,7,10)
console.log(s);


let a=[1,2,3,8,9];
let b=[4,5,6,7];
console.log(a.concat(b));

let nani=[3,5,9,1,6,20,50,100,90,80];
console.log(nani.sort((a,b)=>b-a));
console.log(nani.sort((a,b)=>a-b));

let mooni=["moni","raji","jyo","satya","hema"];
console.log(mooni.reverse());

let rajii=["4","6","2","3","8","9","10"];
console.log(rajii.join("="));






