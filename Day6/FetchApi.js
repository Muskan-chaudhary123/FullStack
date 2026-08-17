// Fetching Data Using HTTPS Module

// const https = require('https')

// https.get("https://jsonplaceholder.typicode.com/posts/1" ,(res)=>{

//     let data = ''

//     res.on('data',(chunkcdd)=>{
//         data += chunk;
//     })

//     res.on('end',()=>{
//         console.log("API Response",JSON.parse(data));
//     }).on('error',(err)=>{
//         console.log(err.message)
//     })
// })

// Fetching Data Using node-fetch Module

// import fetch from 'node-fetch';

// async function fetchData() {
//     try {
//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/posts/1"
//         );

//         const data = await response.json();

//         console.log(data);

//     } catch (error) {
//         console.log('Error fetching Data:', error);
//     }
// }

// fetchData();

// Fetching Data using axios 

import axios from 'axios';

async function fetchData() {
    try{
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1")
        console.log(response.data)

    } catch (error){
        console.log(error)
    }
}
fetchData()