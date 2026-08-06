const http = require('http')

let age = 25;

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-Type' : 'text/html'})
    res.write(`<h1>Age is : ${age}</h1>`)
    res.end
})

server.listen(3000,()=>{
    console.log('Server is listening on http://localhost:3000')
})