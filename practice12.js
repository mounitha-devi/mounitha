console.log("practice problems")
let a=20;
let b=30;
console.log(a+b);

var c=(50,60,70,90);
let result=Math.max(c);
console.log(result);

let d=20;
let e=30;
let f=40;
let g=10;
var result1=Math.min(d,e,f,g);
console.log(result1);

let array=10;
if(array % 2===0){
  console.log("even number");  
}

else{
    console.log("odd number");
}
let num=7;
if(num % 2!==0){
  console.log("odd number");  
}

else{
    console.log("even number");
}

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
console.log("Odd:",odd);

var text="web development";
console.log(text.length);

let num1=24;
let num2=36;
[num1,num2] = [num2,num1];//distucturing method by using two numbers
console.log(num1,num2);

let num3=7/3;
console.log(num3)
