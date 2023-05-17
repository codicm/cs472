

const http=require('http')

const server=http.createServer((req,res)=>{
res.write('welcome to sandraz page')
res.end()
}

)

server.listen(8000)