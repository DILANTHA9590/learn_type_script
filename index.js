"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let name = "dilantha";
let age = 20;
let isTrue = false;
let number1 = 10;
let number2 = 20;
let city = "ampara";
let mobilenumber = "3333";
let undifineOne = undefined;
let mynull = null;
//create string arrey
let Number1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let string1 = ["a", "b", "c", "e", "f"];
//create mixed aarrey  with union type
let mixedArrey1 = ["dilantha", 2];
let mixedArrey2 = ["dilantha", 2, false, true];
//create t2d arrey
const arrey = [
    [1, 2, 3], [1, 2, 3]
];
//fixed lenght  arrey 
let fixedArrey1 = ["car", "bike"];
let fixedArrey2 = ["car", 23];
let fixedArrey3 = ["car", 32, 32];
//Objects
let user1 = {
    name: "dilantha",
    age: 34,
    city: "ampara"
};
let user2 = {
    name: "dilantha",
    age: 34,
    city: "ampara"
};
let user3 = {
    name: "dilantha",
    age: 34,
    city: "ampara"
};
//learned how to  working with  functions  using ts
//want to parametr type  and retun type
function function1(a, b) {
    return a + b;
}
// If nothing is returned, the function should return void.
function function2(a, b) {
    console.log(a + b);
}
function function3(a) {
    console.log("my arrey ", a);
}
let array = [1, 2, 3, 4, 5];
function3(array);
//arow function same as
let function4 = (a, b) => {
    console.log(a + b);
};
let function5 = (a, b) => {
    return a + b;
};
// working with fnction with object 
function function6(userObj) {
    console.log("myObject", userObj);
}
let userObj = {
    name: "dilantha",
    age: 30
};
function6(userObj);
function function7(user) {
    console.log("mynew Users", user);
}
let userObj2 = {
    name: "dilantha",
    age: 23
};
let userObj3 = {
    name: "dilantha",
    age: 23
};
function7(userObj2);
function7(userObj3);
//# sourceMappingURL=index.js.map