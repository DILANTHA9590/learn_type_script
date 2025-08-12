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
let numberArrey = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let stringArrey = ["a", "b", "c", "d", "e"];
for (const val of stringArrey) {
    console.log(val);
}
let obj = {
    name: "dilantha",
    age: 20,
};
console.log(obj);
console.log(number1 + number2);
let i = 10;
for (i = 0; i < 10; i++) {
    console.log(i);
}
for (i = 0; i < 10; i++) {
    console.log(i);
}
let number3 = 10;
let number4 = 13;
if (number3 < number4) {
    console.log(number3, "number 3 lower than number 4 ");
}
else {
    console.log("number 4 lower than number 3");
}
let userData = [{
        name: "dilantha",
        age: "50"
    },
    {
        name: "dilantha",
        age: "50"
    },
    {
        name: "dilantha",
        age: "50"
    },
    {
        name: "dilantha",
        age: "50"
    },
];
const data = userData.map((user) => {
    return user.name;
});
console.log(data);
console.log("samanatha");
//# sourceMappingURL=index.js.map