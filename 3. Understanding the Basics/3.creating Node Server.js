const fs=require('fs');

const path=require('path');
const http=require('http');
const https=require('https');


const server=http.createServer((req,res)=>{
       console.log(req.url,req.method,req.headers);

       //simply thrown nout of event loop
      // process.exit();

      
});

server.listen(3000);