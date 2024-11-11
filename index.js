// "use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// var fs = require("fs");
// console.log("creating .git directory");
// fs.mkdirSync(".git", { recursive: true });
// console.log(".git directory successfully created");
// //Synchronously creates the directory
// //first it checks if .git directory is already in the current working directory
// //if not then it creates it
// //if .git is nested directory then it will create .git recursively
// //ex:if fs.mkdirSync(".git/subdir/subsubdir",{recursive:true})
// //then it will create .git,.git/subdir,.git/subdir/subsubdir
// //the return type of the function is undefined or it will throw error
// //it returns undefined when file created successfully and returns error when the parent directory doesn't exist
// // fs.mkdirSync(".git/objects",{recursive:false})
// // above line return error because it will directly try to create .git/objects folder but it doesnt even contain .git directory 
// console.log("checking if .git directory created or not");
// //fs.existsSync() checks if the file is present or not and returns boolean value
// fs.existsSync(".git") ? console.log("git directory already exists") : fs.mkdirSync(".git");
// console.log(".git directory created successfully");
// fs.mkdirSync(".git/objects", { recursive: true });
// fs.mkdirSync(".git/refs", { recursive: true });
// fs.writeFileSync(".git/HEAD", "ref:refs/head/main\n");
// //creates the file if not present -->asynchronously appends the data to the file

// let command = "PING\nPING"
// console.log(command.length)
// let command1 = "PING\nPING\nPING"
// console.log(command1.length)
// let commandlengthreq = 0
// let noofPINGS = 0
// //pattern is 2pings 1\n 3pings 2\n 4pings 3\n 5pings 4\n
// //command.length=nofpings*4+(noofpings-1)=5pings-1
// //noofpings=command.length+1/5
// let noofpings=(command.length+1)/5
// while (command[commandlengthreq] !== "\n") {
//     commandlengthreq++
// }
// console.log(`the length of the command is ${commandlengthreq}`)
// let str = "*1\r\n$4\r\nPING\r\n"
// let str1="PING\r\nPING\r\nPING\r\n"
// let indexofPing = str1.indexOf("PING")
// console.log(indexofPing)
// let ans=[]
// const findAllOccurences = (str, searchstr) => {
//     let pos=str.indexOf(searchstr)
//     while (pos !== -1) {
//         ans.push(pos)
//         pos=str.indexOf(searchstr,pos+1)
//     }
//     return ans
// }
// const arr = findAllOccurences("PING\r\nPING\r\nPING\r\n", "PING")
// for (let i = 0; i < arr.length; ++i){
//     console.log(arr[i])
// }
// let str2 = "PING\r\nPING\r\nPING\r\n"
// const arrnew=findAllOccurences(str2,"PING")
// for(let i=0;i<arrnew.length;i++){
//     console.log(arrnew[i])
// }
const str = "*2\r\n$4\r\nECHO\r\n$6\r\nbanana\r\n";
const arr = str.toString().split('\r\n');
console.log(arr);
const str1 = "*2\r\n$4\r\nECHO\r\n$9\r\nraspberry\r\n";
const arr1 = str1.toString().split('\r\n');
console.log(arr1);
console.log(arr1[4]);
const str2 = "*2\r\n$3\r\nGET\r\n$5\r\ngrape\r\n";
const arr2 = str2.toString().split('\r\n');
console.log(arr2);
console.log(arr2[4]);
const str3 = "*3\r\n$3\r\nSET\r\n$3\r\nkey\r\n$5\r\nvalue\r\n"
const arr3 = str3.toString().split("\r\n");
console.log(arr3);
console.log(arr3[4]);//this holds the key
console.log(arr3[6]);//this holds the value
const val = "SET foo bar px 100";
const indexofpx = val.indexOf("px");
//zero based indexing is given
console.log(indexofpx);
//to retrive 100 using slice -->index of 1 is 15
//so index of the time period is indexofpx+3
console.log(val[indexofpx + 3]);
//slice method takes the starting index
const sliced = val.slice(indexofpx + 3);
console.log(sliced);
const givendata = "*5\r\n$3\r\nSET\r\n$9\r\npineapple\r\n$6\r\norange\r\n$2\r\npx\r\n$3\r\n100\r\n";
const givenarr = givendata.split("\r\n");
console.log(givenarr);
console.log(givenarr[10]);
console.log(typeof (givenarr[10]))
const time = parseInt(givenarr[10]);
console.log(time);
//this holds the time in milliseconds
console.log(givenarr.indexOf("px"))
const timediffindex = givenarr.indexOf("px") + 2;
console.log(givenarr[timediffindex]);



//javascript methods 
const anew = "balaji nagesh motkulwar"
for (let i = 0; i < anew.length; ++i) {
    console.log(anew[i] + " index of the character is " + anew.indexOf(anew[i]))
    console.log(`${anew[i]} the index of the character is ${i}`)
}
//indexOf returns the first value that satisfies the property 
const anew1 = "balaji nagesh motkulwar";
for (let startingindex = 0; startingindex < anew1.length; ++startingindex) {
    for (let endingindexnotincluded = 0; endingindexnotincluded < anew1.length; ++endingindexnotincluded) {
        const newstring = anew1.slice(startingindex, endingindexnotincluded);
        console.log(newstring);
    }
}
console.log(anew1.indexOf("nagesh"))
const i = anew1.indexOf("nagesh")
const arry = anew1.split(" ");
console.log(arry)
console.log(arry[1].length)
const len = arry[1].length
arry.splice(1, 1);
console.log(arry)
arry[1] = "RajRajeshwari"
console.log(arry);
console.log("localhost".length)
const stro = "localhost 6379"
let n = stro.slice(0, 10)
console.log(n)
let n1 = stro.slice(0, 9)
console.log(n1)
let n2 = stro.slice(0, 8)
console.log(n2)
let newst = stro.slice(10)
console.log(newst)
function generateId() {
    return Math.random().toString(36).slice(2);
}
function generateId40() {
    let strarr = [];
    let val = 4;
    while (val--) {
        strarr.push(generateId());
    }
    let convertedstr = strarr.join('');
    return convertedstr.substring(0, 40);
}
console.log(generateId());
console.log(generateId().length)
console.log(generateId());
console.log(generateId().length)
console.log(generateId());
console.log(generateId().length)
console.log(generateId40())
console.log(generateId40().length)
// Implement to generate 40 char alphanumeric string
// Hint: Use Math.random() and convert to base36 using my approach

function generate40CharString() {
    let result = '';
    while (result.length < 40) {
        result += Math.random().toString(36).substring(2);
    }
    return result.substring(0, 40);
}

console.log(generate40CharString());
console.log(generate40CharString().length);
let v1 = Math.random().toString(36).substring(2)
console.log(v1)
console.log(generateId40())
console.log(generateId40().length)
console.log(generateId40())
console.log(generateId40().length)
// REPLCONF listening-port <PORT>
//*3\r\n$8\r\nREPLCONF\r\n$14\r\nlistening-port\r\n$4\r\n6380\r\n
let s = `*3\r\n$8\r\nREPLCONF\r\n$14\r\nlistening-port\r\n$4\r\n6380\r\n`
let sarr = s.split('\r\n')
console.log(sarr)
console.log(`${sarr[6]} this contains the port value`)
