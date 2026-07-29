const fs = require('fs').promises

// Writing in a file
async function WriteFileExample(){
    try{
        await fs.writeFile('data1.txt' , 'Hello this is async await example code');
        console.log('File written successfully')

    } catch(err){
        console.log(err)
    }
}
Example()

// reading from a file

async function ReadFileExample(){
    try{
        const data = await fs.readFile('data1.txt' , 'utf-8');
        console.log(data)

    } catch(err){
        console.log(err)
    }
}
ReadFileExample()

// appending in a file

async function AppendFileExample(){
    try{
        await fs.appendFile('data1.txt' , '\nThis is appended code');
        console.log('appended successfully')

    } catch(err){
        console.log(err)
    }
}
AppendFileExample()

// deleting a file 
async function DeleteFileExample(){
    try{
        await fs.unlink('data1.txt');
        console.log('deleted successfully')

    } catch(err){
        console.log(err)
    }
}
DeleteFileExample()