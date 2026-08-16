// Http Module
const http = require('http')

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type' : 'text/plain'});
    res.end('Hello World\n')
}).listen(3000,()=>{
    console.log('Server is listening at http://localhost:3000/') 
})


// Https Module 

const https = require('https')
const fs = require('fs')

const options = {
    key : fs.readFileSync('key.pem'),
    cert : fs.readFileSync('cert.pem')
}

const server = https.createServer(options,(req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('Hello World')
});

server.listen(5000,()=>{
    console.log('Server is listening at https://localhost:5000/')
})