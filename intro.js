"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var name = "Naimish";
console.log(name);
var age = 21;
function addNum(n) {
    return n + 5;
}
addNum(5);
var myName = function (name) {
    return name.toUpperCase();
};
myName("4");
// function signUp(name:string,password:number){
//     if(name && password){
//         return "Valid user"
//     }
//     return "Enter correct name and password"
// }
function signUp(name, password) {
    return (name && password) ? "valid" : "invalid";
}
console.log(signUp("naimish", 123));
