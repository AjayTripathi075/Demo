const cf=require('./createFile');

const http=require('http');

const port=3000;

const server=http.createServer((req,resp)=>{

    cf();

    resp.write("Welcome server created file ");

    resp.end();

});

server.listen(port,()=>{

    console.log(`Server Started : http://localhost:${port}`);

})