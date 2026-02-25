// Declare variables using var, let, and const. Assign different data types (string, number, boolean, null, undefined, array, object). Print their values and typeof results. Compare '5' and 5 using both == and ===.

var x=3;
let name="ashith";
const y=2.4;

//String 
let names="Ashith";
console.log(names);
console.log(typeof(names));

//Number
let num=34;
console.log(num);
console.log(typeof(num));

//Boolean
let bool=true;
console.log(bool);
console.log(typeof(bool));

//null
let a=null;
console.log(a);
console.log(typeof(a));

//undefined
let z;
console.log(z);
console.log(typeof(z));

//array
let arr=[2,4,6];
console.log(arr);
console.log(typeof(arr));

// objects
let person={
    name:"ashith",
    age:20
}
console.log(person);
console.log(typeof(person));


//== and ===

let b=5;
let c="5";

console.log(b==c);

console.log(b===c);