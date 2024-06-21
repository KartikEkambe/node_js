const notes=require('./practice/notes');
const _=require('lodash');
// function callback(){
//     console.log('NodeJS Tutorial');
// }

// const add=function(a,b,callback){
//     let result=a+b;
//     console.log(result);
//     callback();
// }

// add(12,234,callback);


// const add=function(a,b,callback){
//     let result=a+b;
//     console.log(result);
//     callback();
// }

// add(32,23,()=>console.log('Addition Completed'));


// console.log('Main.js server page is loaded')
// let age=notes.age;
// console.log(age);
// let name=notes.name;
// let addFunc=notes.addNum(age+10,20);
// console.log(name);
// console.log(addFunc);


let data=['person', 'person',1,2,1,2,3,1,'kartik','person' ];
let filter=_.uniq(data);
console.log(filter);
console.log(_.isString(12));
let index=_.findIndex(data,(e)=>{return e=='kartik';},0);
console.log(index);
const jsonString={name:"Kartik",age:22};
const json=JSON.stringify(jsonString);
console.log(json);






