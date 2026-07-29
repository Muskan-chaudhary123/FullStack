// Using Promise --------- Then / catch

const { compose } = require('stream')

const fs = require('fs').promises

// creating and writting in a file 
fs.writeFile('data.txt', 'Hello world from Node.js By Muskan').then(()=>{
    console.log('File successfully returned')
}).catch((err)=>{
console.log(err)
})


// reading file data

fs.readFile('data.txt' , 'utf-8').then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})

// appending in a file
fs.appendFile('data.txt', "\nThis is an appended text").then(()=>{
    console.log('Data appended successfully')
}).then((err)=>{
    console.log(err)
})


// Deleting File
fs.unlink('data1.txt').then(()=>{
    console.log('Data deleted successfully')
}).catch((err)=>{
    console.log(err)
})