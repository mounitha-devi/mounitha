//promises
console.log("hii good morning");
const m= new Promise((resolve,reject)=>{
    resolve("success");

});
m.then(data=>{
    console.log(data);
});
//passing values with resolve()
const promise = new Promise((resolve, reject) => {
  resolve("Hello World");
});

promise.then(value => {
  console.log(value);
});
//promise chaining
Promise.resolve(20)
.then(num=> num*2)
.then(num=>num*2)
.then(num=>console.log(num));
//promise.all()
const p1=Promise.resolve("A");
const p2=Promise.resolve("B");
const p3=Promise.resolve("C");
Promise.all([p1,p2,p3])
.then(data1=> console.log(data1));
//promise.allsettled()
Promise.allSettled([p1,p2])
.then(result=>console.log(result));
//promise.race()
const s1 = new Promise(resolve =>
  setTimeout(() => resolve("Fast"), 1000)
);

const s2 = new Promise(resolve =>
  setTimeout(() => resolve("Slow"), 2000)
);

Promise.race([s1, s2])
  .then(result => console.log(result));

  //promise.race another example
  const c1 = new Promise((_, reject) =>
  setTimeout(() => reject("Error"), 500)
);

const c2 = new Promise(resolve =>
  setTimeout(() => resolve("Success"), 1000)
);

Promise.race([c1, c2])
  .then(result => console.log(result))
  .catch(error => console.log(error));
//promise.any()
  const t1 = Promise.reject("Error 1");

const t2 = new Promise(resolve =>
  setTimeout(() => resolve("Success"), 1000)
);

const t3 = new Promise(resolve =>
  setTimeout(() => resolve("Another Success"), 2000)
);

Promise.any([t1, t2, t3])
  .then(result => console.log(result))
  .catch(error => console.log(error));

//promise.reject()
Promise.reject("mistake")
.catch(console.log);

//promise resolve() with object
Promise.resolve({
  id: 1,
  name: "mouni"
}).then(user => {
  console.log(user.name);
});

//catch()
const A = new Promise((resolve, reject) => {
  reject("Something went wrong");
});

A.catch(error => {
  console.log(error);
}); 
//finally
Promise.resolve("I won the success")
  .then(result => {
    console.log(result);
  })
  .finally(() => {
    console.log("Finished");
  });


  let x=true;
  console.log (typeof(x));