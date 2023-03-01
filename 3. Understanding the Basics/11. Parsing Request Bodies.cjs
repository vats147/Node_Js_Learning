/*
What i do??
    --> node send data in chunks { we can see with req.on('data',() ) }
    --> then we need to store that data into buffer { Buffer.concat(body).toString() }
    --> then we can use that data and save in file 

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
              const body=[];
              req.on('data',(chunk)=>{
                     console.log(chunk);
                     body.push(chunk);
              });
              req.on('end',()=>{
                     const parsedBody=Buffer.concat(body).toString();
                     const messgae=parsedBody.split('=')[1];
                     console.log(parsedBody);
                     fs.writeFileSync('message.txt',messgae);
              });

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