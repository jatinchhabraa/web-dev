/// learniing about objects
const userName = {
  firstName: "jatin", // firstName is primitve variable
  isLoggedIn: true,
};

console.log(userName);
console.log(typeof userName);

userName.firstName = "Barnika"; // although userName object is const but primitves inside it are not so their value can be changed

// adding more data in object

userName.lastName = "chhabra";
console.log(userName);

// accessing values in object
console.log(userName.firstName);

// objects provide by JS

let today = new Date();
console.log(today.getDate());

//////////////////

// lets study arrays now
// square brackets are used in array
let heros = ["a", "b", "c"]; // array of strings

let anotherUser = ["hitesh", true]; // different types can be entered in array in JS
console.log(anotherUser[0]); // accessing elements in array
