/*
What i do??
    -->is user come with /messgae then
    1. Create a file
    2. enter DUMMY text in file
    3. Redirect user with status code=302 &  / path 

*/

const fs=require('fs');
const path=require('path');
const http=require('http');



const server=http.createServer((req,res)=>{


//console.log(req.url,req.method,req.headers);

       const url=req.url;
       const method=req.method;
       if(url==='/')
       {
              res.write('<html> <body> <form action="/message" method="POST" > <input type="text" name="message" > <button type="submit">Submit </button> </form></body></html>');
              return res.end();
       }

       if(url==='/message' && method==="POST")
       {
              fs.writeFileSync('message.txt','DUMMY');
              res.statusCode=302;
              res.setHeader('Location','/');
              return res.end();
       }
      
      //use response object
      res.setHeader('Content-Type','text/html');
      res.write("<html> <body> <h1>Hello World</h1></body></html>");
      res.end();
});

server.listen(3000);