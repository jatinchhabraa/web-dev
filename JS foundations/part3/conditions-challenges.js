// check if a number is greater than another number
let num1 = 51;
let num2 = 10;

if (num1 > num2) {
  console.log(true);
} else {
  console.log(false);
}

// check if string is equal to another string

let userName1 = "jatin";
let userName2 = "jashan";
// when we check strings are equal or not use === otherwise use ==
if (userName1 === userName2) {
  console.log("yes they are same");
} else {
  console.log("no they dont match");
}

// checking if variable is number or not

let checkVaraible = "23";

let type = typeof checkVaraible;
console.log(type);

if (type === "number") {
  console.log("varaiable is a number ");
} else {
  console.log("not its not a number");
}

// checking if boolean value is true or false

let checkBool = false;

if (checkBool) {
  console.log("true");
} else {
  console.log("false");
}

// check if array is empty or not
let items = [];
if (items.length == 0) {
  // array.length gives length of array
  console.log("array is empty");
} else {
  console.log("not its not empty");
}
