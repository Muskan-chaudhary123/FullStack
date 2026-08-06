const http = require('http')

// Understanding Response
// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type' : 'text/plain'})
//     res.write('Hello world')
//     res.end()
// });


// Handling different routes

// const server = http.createServer((req,res)=>{
//     if(req.url == '/'){
//         res.writeHead(200,{'Content-Type' : 'text/html'})
//         res.write('<h1>This is Home Page</h1>')
//         res.end()
//     }
//     else if(req.url == '/about'){
//         res.writeHead(200,{'Content-Type' : 'text/html'})
//         res.write('<h1>This is about Page</h1>')
//         res.end()
//     }

//     else{
//         res.writeHead(404,{'Content-Type' : 'text/html'})
//         res.write('<h1>404 Page not found</h1>')
//         res.end()
//     }
// });


// Sending JSON Response

const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.writeHead(200,{'Content-Type' : 'text/html'})
        res.write(JSON.stringify({name : 'Mohit' , age:21}))
        res.end()
    }
    
    else{
        res.writeHead(404,{'Content-Type' : 'text/html'})
        res.write('<h1>404 Page not found</h1>')
        res.end()
    }
});

server.listen(5000,()=>{
    console.log('Server is listening on port http://localhost:5000/')
})

