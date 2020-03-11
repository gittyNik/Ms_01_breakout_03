// variables, expressions & datatypes

// var a = 10;
// var b ="20";
// console.log(`a`, typeof(a));
// console.log(`b`, typeof(b));
// variable def

// dtypes

// Scope
// let a;
// console.log(a);
// var j = 11;
// let test = function () {
//     for (var j = 0; j < 10; j++) {}
//     console.log(`j`, j); //works
//     for(let i=0; i<10; i++) {
//         console.log(`inside block scope`, i);

//     }
//     // console.log(`i`, i); //reference error
// };

// test();

// console.log(`j out`, j);

// conditionals if-else, switch, ternary

// if(condition) {

// } else {

// }
// let a = 'b';
// switch(a) {
//     case 'a':
//     console.log(`case a`);
//     break;
//     case 'b':
//     case 'c':
//     case 'd':
//     console.log(`case b, c, and d`);
//     break;
// }

// (condition)? (true): (false);
// let a = 10;
// let b = (a == 9) ? true : false;

// let b = (a == 9) ? a:0;

// console.log(b, a);

// Program execution flow: loops & iteration

// for, while

// Arrays: index, length & basic methods


let a = [];
for (let i = 0; i<10; i++) {
    a.push(i);
}

let b= [1, 2];
b.push(3);

b.splice(0, 0, "string");
// (index, deleteCount, insertionObjectOrArray)
console.log(b, "np");


// push()
// pop()
// length
// splice()
// map()

// console.log(a);

// arrray dec, a[i] mean, a.length, a.splice, lodash

// npm: create project, install packages etc

// npm init, npm init -y, npm i -s <package-name>, npm i -D <package-name>, package.json, node_modules/, npm scripts


// require, module.exports


// let some_variable =  readCodeFromFile();
// displayThatCode(readCodeFromFile);

// readCodeFromFile() {

// }

// displayThatCode() {

// }