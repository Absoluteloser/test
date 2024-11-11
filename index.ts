import * as fs from 'fs';
import { join } from "path";
console.log(`creating .git directory`)
fs.mkdirSync(".git", { recursive: true })
console.log(`.git directory successfully created`)
//Synchronously creates the directory
//first it checks if .git directory is already in the current working directory
//if not then it creates it
//if .git is nested directory then it will create .git recursively
//ex:if fs.mkdirSync(".git/subdir/subsubdir",{recursive:true})
//then it will create .git,.git/subdir,.git/subdir/subsubdir
//the return type of the function is undefined or it will throw error
//it returns undefined when file created successfully and returns error when the parent directory doesn't exist
// fs.mkdirSync(".git/objects",{recursive:false})
// above line return error because it will directly try to create .git/objects folder but it doesnt even contain .git directory 
console.log(`checking if .git directory created or not`)
//fs.existsSync() checks if the file is present or not and returns boolean value
fs.existsSync(".git") ? console.log("git directory already exists") : fs.mkdirSync(".git")
console.log(`.git directory created successfully`)
fs.mkdirSync(".git/objects", { recursive: true })
fs.mkdirSync(".git/refs", { recursive: true })
fs.writeFileSync(".git/HEAD", "ref:refs/head/main\n")
//creates the file if not present -->asynchronously appends the data to the file
