const fs = require('fs')

// Writting and writting in file
fs.writeFileSync('data.txt','Hello Node.js ' , 'utf8')
console.log("File written sucessfully ")

const data = fs.readFileSync('data.txt' , 'utf8')
console.log(data)

// Updating File
fs.appendFileSync('data.txt','From Muskan' , 'utf8')

// Creating a Folder
fs.mkdirSync('newFolder')

// Remove a folder 
fs.rmdirSync('newFolder')

// File Check
if(fs.existsSync('data.txt')){
    const data = fs.readFileSync('data.txt' , 'utf8')
    console.log(data)
}
else{
    console.log('File does not exist')
}