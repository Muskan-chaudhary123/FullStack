const http = require('http')


const userData = [
        {
           id : 1,
           name : 'ABC',
           email : 'text@gmail.com' 
        },
        {
           id : 2,
           name : 'STU',
           email : 'next@gmail.com' 
        }
    ]

const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type' , 'application/json');
    res.write(JSON.stringify(userData))
    res.end()
})

server.listen(3000)
