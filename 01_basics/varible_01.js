// Here we can learn  the concept of Variable in javaScript tag 
// https://www.geeksforgeeks.org/batch/fork-javascript-batch/track/fork-javascript-basics/article/MzkyMg%3D%3D

//Q. 1 Why let varible type comes after the var ..? Why we use let , Diff b/w var & let
/* Ans : var does not the concept about the scope of block/Global. If we can assign var type varible in specific block , & But it can be modify outside the block
So then the let comes..
So Use only the ******   let and const ********* */


// Types for assign to the varible
const age = 22;// there is no mandatory to give semicolon at last of Statement
let name_ = "Jaswant"

var course = "MCA" // Don't use it. It Does not know about the scope 

address = "Haldoni GB Nagar UP" // also we can assign the varible

// For Print
console.log(age);

//Multiple varible print 
console.table([age, name_, course, address]);

/*Variable Scope in Javascript


Scope of a variable is the part of the program from where the variable may directly be accessible. 
In JavaScript, there are two types of scopes: 

    Global Scope – Scope outside the outermost function attached to Window.
    Local Scope – Inside the function being executed.


Let’s look at the code below. We have a global variable defined in first line in global scope. Then we have a local variable defined inside the function fun(). */

let global_Var = 2345;
function fun() {
    let localVar = 43645;
    console.log(localVar);
    console.log(global_Var);

}
fun();
// Here we can aces the global but cant use local
// console.log(localVar);

// alert("Keep Quite");// Bcoz we use node.js not browser
// window.alert("kasdn") also

//Types of Data
/*The latest ECMAScript(ES6) standard defines seven data types: Out of which six data types are Primitive(predefined).

    Numbers: 5, 6.5, 7 etc(size = 2^53). and for More size use ----> bigint(DataType)
    String: "Hello GeeksforGeeks" etc.
    Boolean: Represent a logical entity and can have two values: true or false.
    Null: This type has only one value : null.
    Undefined: A variable that has not been assigned a value is undefined.
    Object: It is the most important data-type and forms the building blocks for modern JavaScript. We will learn about these data types in details in further articles.
 */

    //For knwoing the type of var
    console.log(typeof(age))
    //Q.console.log(typeof(null)) it gives object

    // console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

// // === 

// console.log("2" === 2); // here it will be check the datatype also, in comparison

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt
// these datatype will be pass by the value not their reference(its copy passed in the passing)

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // it give false beacause the symbol make uniq rather that its value may be equal or not

// const bigNumber = 3456543576654356754n when u add (n) It convert into bigInt datatype



// Reference (Non primitive)

// Array, Objects, Functions  // These are the pass by the refernece

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",// these are the object
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof myFunction) // give function but we call it function object
console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//----------------------------------- Memory in the javascript
// Stack(primitive), and Heap (Non-Primitive)

//------------String in JS

const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value"); //bad habit

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com') // another wey to create String varible
// js automatically assign the specific datatype but when you want to declare data type from yourself then you can used new keyword & this wey like above

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length); // There are many method in the String of js
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4) // it not take as negative,It take as positive
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar')) // it check is contains or not

console.log(gameName.split('-'));

let num = Number(2345);
console.log(num.toString()) // it will be convert into String

const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1)); // it will be fix the precison value like 123 in below

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9)); // it get round off the number & Mainly used in the generating the random number
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // **** IMP LIne


 