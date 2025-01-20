let balalnce = 1200;

console.log(typeof balalnce); // number data type

let anotherBalance = new Number(120);

console.log(typeof anotherBalance); // object data type

let isActive = true;

console.log(typeof isActive); // boolean

// null and undefined

let firstName;
console.log(firstName); // undefined

let lastName = null;
console.log(lastName); // null

// string

let myString = "hello";
let myStringOne = "hola";
let userName = "jatin";

//////////////
let greetMessage = `${myString} ${userName} !`; // string interpolation
console.log(greetMessage);

let demo = `value is ${2 ** 2}`;
console.log(demo);

// symbol guarantees to be uinique
// will study about symbol sometime maybe

let sm1 = Symbol();
console.log(sm1);
