console.log("Basic practice problems for freshers ")

let a=20;
let b=30;
console.log(a+b);//find any two numbers

var c=(50,60,70,90);
let result=Math.max(c);
console.log(result); //find largest number

let d=20;
let e=30;
let f=40;
let g=10;
var result1=Math.min(d,e,f,g);
console.log(result1); //find lowest number

let array=10;
if(array % 2===0){
  console.log("even number");  
}

else{
    console.log("odd number");//find even 
}

let num=7;
if(num % 2!==0){
  console.log("odd number");  
}

else{
    console.log("even number");//find odd

let numbers=[1,2,3,4,5,6,7,8,9,10];
let even=[];
let odd=[];
for (let i=0;i<numbers.length;i++){
    if(numbers[i]% 2===0){
        even.push(numbers[i]);
    }
    else{
        odd.push(numbers[i]);
    }
}
console.log("Even:",even);
console.log("Odd:",odd);//find both even and odd
}

var text="web development";// length of the string
console.log(text.length);

let num1=24;
let num2=36;
[num1,num2] = [num2,num1];//distucturing method by using two numbers
console.log(num1,num2);

let num3=7%3;
console.log(num3)

let n=5;
let fact=1;
for (let j=1;j<=n;j++){
    fact*=j;
    console.log(fact);
}
let m=0;
let m1=1;
console.log(m);
console.log(m1);

for (let l=1;l<=8;l++){
    let m2=m+m1;
    console.log(m2);
    m=m1;
    m1=m2;
}