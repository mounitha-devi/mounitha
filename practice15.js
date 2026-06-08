import validator from "validator";
console.log(validator.isEmail("mouni"));

import axios from "axios";
const response=await axios.get("https://jsonplaceholder.typicode.com/practice15.js");

//promises
const m= new Promise((resolve,reject)=>{
    resolve("success");

});

