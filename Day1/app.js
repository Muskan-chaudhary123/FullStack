const fs = require('fs');

// ----------------------------------------Reading A file -----------------
fs.readFile('text.txt' , 'utf8' , (err,data) =>{
    if(err){
        console.log('Error reading file : ',err);
        return 
    }
    console.log("file content : " , data )

})
const data = fs.readFileSync('text.txt' , 'utf8')
console.log(data)

// ---------------------------Writing in A file-------------------------

fs.writeFile('text2.txt' , 'Hello form node.js' , (err)=>{
    if (err){
        console.log("Error : ",err)
    }
    fs.readFile('text2.txt' , 'utf8' , (err,data) =>{
    if(err){
        console.log('Error reading file : ',err);
        return 
    }
    console.log("file content : " , data )

})
})

// -----------------------------------Deleting A File -----------------------
fs.unlink('text2.txt' , (err)=>{
    if (err){
        console.log(err)
    }
    console.log('Deleted Sucesssfully')
})


// --------------------------------- Appending to a file------------------
fs.appendFile('text.txt' , ' By Muskan Chaudhary' ,(err)=>{
    if (err){
        console.log(err)
    }
    fs.readFile('text.txt' , 'utf8' , (err,data) =>{
    if(err){
        console.log('Error reading file : ',err);
        return 
    }
    console.log("file content : " , data )
    })
})


// -----------------------------------Renaming A File ---------------------
fs.rename('text.txt' , 'text2.txt' ,(err)=>{
    if (err){
        console.log(err)
    }
    console.log('Sucessfull')
})