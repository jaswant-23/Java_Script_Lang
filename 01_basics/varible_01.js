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
