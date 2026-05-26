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

