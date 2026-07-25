// Using Promise --------- Then / catch

const fs = require('fs').promises

// creating and writting in a file 
fs.writeFile('data.txt', 'Hello world from Node.js By Muskan').then(()=>{
    console.log('File successfully returned')
}).catch((err)=>{
console.log(err)
})