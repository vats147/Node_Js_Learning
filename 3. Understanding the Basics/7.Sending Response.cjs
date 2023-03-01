const fs=require('fs');

const path=require('path');
const http=require('http');
const https=require('https');


const server=http.createServer((req,res)=>{
       console.log(req.url,req.method,req.headers);

       //simply thrown nout of event loop
      // process.exit();

      //use response object
      res.setHeader('Content-Type','text/html');
      res.write("<html> <body> <h1>Hello World</h1></body></html>");
      res.end();
});

server.listen(3000);