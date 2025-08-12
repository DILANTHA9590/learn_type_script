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
let mixedArrey2 = ["dilantha", 2, 3, false, true];
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
    name: "dilantha nayanajith npx tsc",
    age: 23
};
function7(userObj2);
function7(userObj3);
//how to work unnkown adn any types
// we cann asignn unkownveriables all types values
const myAny1 = "w";
const myAny2 = 2;
const myAny3 = [1, 2, 3, 5];
//working with  unkown
// unknown kiyanne type-safe version ekak any type eka wage.
// any widiyata unknown type eka wenasak — unknown value ekak assign karanna puluwan, habai e value eka use karanna (access karanna, call karanna, assign karanna) kalin type check karanna one.
// unknown type eka TypeScript ekata kiyanne: “Mama danne naha me variable eke type eka mokakda, so eka use karanna ape safety karanna one.”
// e nisa api nithra type check check karala ape logic eka create kranna oni 
let myUnkown = 4;
// value.toUpperCase();  // Error! TS error: Object is of type 'unknown'.
// we want to check type before it using 
if (typeof myUnkown === "string") {
    // now TS knows value is string
    console.log(myUnkown.toUpperCase());
}
else if (typeof myUnkown === "number") {
    console.log(myUnkown.toFixed(2));
}
else {
    console.log("Unknown type");
}
let name1 = "dilantha";
// now we can assin number or string 
let name2 = 2;
const data1 = {
    name: "dilantha",
    age: 12,
    city: "ampra"
};
//  data1.age = 12 we cant assin new data now. why now it readonly  readonly obj property we cant change
// optinal
let obje4 = {
    name: "dilantha",
    age: 32,
};
// literals types ---------------------------------------->
// mekedi apita kiyanna puluvan me veriables walata me values 
// witharai assign kranna  puluvn kiyala  e vagema apata union type use karala   apita  mutiple values denna pulubvan
let direction = "north";
direction = "west";
direction = "kjkl";
let direction2 = "North";
direction2 = "North";
function myArrey(val) {
    let typeNumber = [];
    let typeString = [];
    for (const item of val) {
        console.log(item);
        let data = item;
        if (typeof item === "number") {
            typeNumber.push(item);
        }
        else if (typeof item === "string") {
            typeString.push(item);
        }
        else {
            continue;
        }
    }
    console.log("myArraynumber", typeNumber);
    console.log("myArrayString", typeString);
}
let myArrey1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "dilantha", false];
myArrey(myArrey1);
function testOne(val) {
    if (val.type === "square") {
        console.log(val.height);
    }
    else {
        console.log(val.radius);
    }
}
testOne;
//# sourceMappingURL=index.js.map