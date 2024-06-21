const fs = require('fs');
const os = require('os');

let user = os.userInfo();

console.log(user);
console.log(os.hostname());
fs.appendFile('greetingText.txt','Hey Hello  there Good morning \n',()=>console.log('File Created'))

// fs.readFile('file.txt','utf-8',(err,data)=>{
//     console.log(err,data);
// })

// const a=fs.readFileSync('file.txt');
// console.log(a.toString());

// fs.writeFile('file2.txt',"This is a file 2 data",()=>{
//     console.log("Written to the file");
// })


// b=fs.writeFileSync('file2.txt',"This is a file 2 data2")
//     console.log(b);

// console.log("Finished reading file");

