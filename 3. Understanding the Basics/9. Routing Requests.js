/*
What i do??
       --> if user come with / route then in the the return s/he will recive a form with submit button and which will have action ="/message"

*/

const fs=require('fs');

const path=require('path');
const http=require('http');
const https=require('https');


const server=http.createServer((req,res)=>{


//console.log(req.url,req.method,req.headers);

       const url=req.url;
       if(url==='/')
       {
              res.write('<html> <body> <form action="/message" method="POST" > <input type="text" name="message" > <button type="submit">Submit </button> </form></body></html>');
              return res.end();
       }
      
      //use response object
      
      res.setHeader('Content-Type','text/html');
      res.write("<html> <body> <h1>Hello World</h1></body></html>");
      res.end();
});

server.listen(3000);