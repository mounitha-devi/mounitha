console.log("hello");
const fs=require("fs");
fs.writeFileSync("student.txt","Hello ");
fs.appendFileSync("student.txt","Students");
fs.appendFileSync("student.txt","\nHello bubbies,good evening");
const data=fs.readFileSync("student.txt","utf8");
console.log(data);
//fs.unlinkSync("student.txt");

const path = require("path");
console.log(path.basename("C:/Users/APSSDC-GPT-PTP/Desktop/mounitha/practice14.cjs"));

try{
  console.log(data);
}
catch(error){
    console.log(error.message);
}
throw new Error("student not found");

