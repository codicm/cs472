

// const http=require('http')

// const server=http.createServer((req,res)=>{
// res.write('welcome to sandraz page')
// res.end()
// }

// )

// server.listen(8000)

const express=require('express');
const app=express();

app.get("/",(req,res)=>{
    res.send("helood there")
}

)

app.listen(8080);